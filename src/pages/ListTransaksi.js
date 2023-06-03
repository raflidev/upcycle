import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/Navbar'

function ListTransaksi() {
  // useparams
  const {status} = useParams()
  const [transaksi, setTransaksi] = React.useState([])
  const [loading, setLoading] = React.useState(false)

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

  const konfirmasiHandler = (e) => {
    
  }

  const rupiah = (number)=>{
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number).replace(/(\.|,)00$/g, '');
  }
  return (
    <div>
      <Navbar/>

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
                            <th scope="col" className="text-lg font-medium text-gray-900 px-6 py-4 text-left">
                                Action
                            </th>
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
                                  <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap space-x-3">
                                      <button onClick={() => konfirmasiHandler(item.id)}>Konfirmasi</button>
                                      <button onClick={() => konfirmasiHandler(item.id)}>Tolak</button>
                                  </td> 
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