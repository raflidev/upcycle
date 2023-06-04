import React from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/Navbar'

function ListTransaksi() {
  // useparams
  const navigate = useNavigate()
  const {status} = useParams()
  const [transaksi, setTransaksi] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [showBerhasil, setShowBerhasil] = React.useState(false)
  const [showGagal, setShowGagal] = React.useState(false)
  const [message, setMessage] = React.useState('')
  const [error, setError] = React.useState([])



  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    
    axios.get(`http://localhost:8000/api/transaction/user/${user.id}`).then(res => {
      // filter transaksi berdasarkan status
      let tempTransaksi = []
      res.data.map((item) => {
        item.map((item) => {
          if(item.status === status){
            tempTransaksi.push(item)
          }
        })
      })
      setTransaksi(tempTransaksi)
      setLoading(false)
    })
  }, [])

  const TerimaHandler = (id) => {
    axios.put(`http://localhost:8000/api/transaction/konfirmasi/${id}`, {
      status: 'sukses'
    }).then(res => {
      if(res.data.status === '200'){
        setShowBerhasil(true)
        setMessage(res.data.message)
        setTimeout(() => {
          navigate('/dashboard')
        }, 2000)
      }else{
        setShowGagal(true)
        setMessage(res.data.message)
        setError(res.data.error)
      }
    })
  }

  const TolakHandler = (id) => {
    axios.put(`http://localhost:8000/api/transaction/konfirmasi/${id}`, {
      status: 'suspend'
    }).then(res => {
      if(res.data.status === '200'){
        setShowBerhasil(true)
        setMessage(res.data.message)
        setTimeout(() => {
          navigate('/dashboard')
        }, 2000)
      }else{
        setShowGagal(true)
        setMessage(res.data.message)
        setError(res.data.error)
      }
    })
  }


  const rupiah = (number)=>{
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number).replace(/(\.|,)00$/g, '');
  }


  return (
    <div>
      <Navbar/>
        {
          showBerhasil &&
          <div className='bg-green-400 w-full py-2 px-4 rounded'>
            {message}
          </div>
        }
        {
          showGagal &&
          <div className='bg-red-500 w-full py-2 px-4 rounded'>
            {message}
            {Object.keys(error).map((key, i) => (
              <p key={i}>
                <span>{key}: </span>
                <span>{error[key]}</span>
              </p>
            ))}
          </div>
        }
      <div className="flex flex-col mt-10 px-40">
            <div className="overflow-x-auto">
                <div className="py-2 inline-block min-w-full">
                <div className="overflow-hidden">
                    <table className="min-w-full">
                    <thead className="bg-gray-200 border-b">
                        <tr>
                            <th scope="col" className="text-lg font-medium text-gray-900 px-6 py-4 text-left">
                                #
                            </th>
                            <th scope="col" className="text-lg font-medium text-gray-900 px-6 py-4 text-left">
                                Item
                            </th>
                            <th scope="col" className="text-lg font-medium text-gray-900 px-6 py-4 text-left">
                                Harga
                            </th>
                            <th scope="col" className="text-lg font-medium text-gray-900 px-6 py-4 text-left">
                                Bukti
                            </th>
                            {
                              status === 'pending' &&
                            <th scope="col" className="text-lg font-medium text-gray-900 px-6 py-4 text-left">
                                Action
                            </th>
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                          transaksi.map((item, index) => {
                              return (
                                <tr key={index} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                  <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">{index+1}</td>
                                  <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      {item.product_title}
                                  </td>
                                  <td className="text-lg text-gray-900 font-light px-6 py-4">
                                      {rupiah(item.product_price)}
                                  </td>
                                  <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      <img className='w-1/6' src={`http://localhost:8000/images/${item.image}`} alt="" />
                                  </td>
                                  {
                                    item.status === 'pending' &&
                                    <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap space-x-3">
                                        <button onClick={() => TerimaHandler(item.id)}>Konfirmasi</button>
                                        <button onClick={() => TolakHandler(item.id)}>Tolak</button>
                                    </td> 
                                  }
                              </tr>
                              )
                            })
                        }
                        
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListTransaksi