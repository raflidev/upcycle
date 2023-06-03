import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = React.useState({})
  const [product, setProduct] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [transaksi, setTransaksi] = React.useState([])
  const [sukses, setSukses] = React.useState(0)
  const [pending, setPending] = React.useState(0)
  const [suspend, setSuspend] = React.useState(0)
  const [showBerhasil, setShowBerhasil] = React.useState(false)
  const [showGagal, setShowGagal] = React.useState(false)
  const [message, setMessage] = React.useState('')
  const [error, setError] = React.useState([])

  React.useEffect(() => {
    setLoading(true)
    const user = JSON.parse(localStorage.getItem('user'))
    setUser(user)

    if(!localStorage.getItem('user')){
      navigate('/login')
    }

    axios.get(`http://localhost:8000/api/product/user/${user.id}`)
    .then(res => {
      setProduct(res.data.product)
    })

    axios.get(`http://localhost:8000/api/transaction/user/${user.id}`).then(res => {
      setTransaksi(res.data)

      // count transaksi sukses, pending, suspend
      let sukses = 0
      let pending = 0
      let suspend = 0

      res.data.map((item) => {
        item.map((item) => {
          if(item.status === 'sukses'){
            sukses++
          }else if(item.status === 'pending'){
            pending++
          }else{
            suspend++
          }
        })
      })

      setSukses(sukses)
      setPending(pending)
      setSuspend(suspend)
      setLoading(false)
    })

  }, [])

  const rupiah = (number)=>{
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number).replace(/(\.|,)00$/g, '');
  }

  const deleteHandler = (id) => {
    axios.delete(`http://localhost:8000/api/product/delete/${id}`)
    .then(res => {
      console.log(res);
      if(res.data.status === '200'){
        setShowBerhasil(true)
        setMessage(res.data.message)
        setTimeout(() => {
          navigate('/dashboard')
        }, 1000);
      }else{
        setShowGagal(true)
        setMessage(res.data.message)
        setError(res.data.error)
      }
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    })
  }
  

  return (
    <div>
      { loading &&
        <div
          className="fixed z-20 h-20 w-20 m-auto inset-x-0 inset-y-0 p-4 rounded-sm bg-black/50">
          <div className="flex w-full h-full justify-center">
              <svg className="animate-spin h-18 w-18 text-white w-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
          </div>
        </div>
      }
      <Navbar/>
      <div className='px-40 pt-20 min-h-screen text-xl'>
        {
          showBerhasil &&
          <div className='bg-green-400 w-full py-2 px-4 rounded'>
            {message}
          </div>
        }
        {
          showGagal &&
          <div className='bg-red-500 text-white w-full py-2 px-4 rounded'>
            {message}
            {Object.keys(error).map((key, i) => (
              <p key={i}>
                <span>{key}: </span>
                <span>{error[key]}</span>
              </p>
            ))}
          </div>
        }
        <div className='font-medium'>My Profile</div>
        <div className='font-bold'>{user.name}</div>
        <Link to="/profile" className='text-lg'>Edit Profile</Link>

        <div className='grid grid-cols-4 gap-4 mt-10'>
            <div className='border-2 border-black rounded-xl p-5'>
                <div>Number of post</div>
                <div className='float-right'>{product.length}</div>
            </div>
            <Link to="sukses" className='border-2 border-green-600 hover:bg-green-600 rounded-xl p-5'>
                <div>Successfull Transaction</div>
                <div className='float-right'>{sukses}</div>
            </Link>
            <Link to="pending" className='border-2 border-yellow-400 hover:bg-yellow-400 rounded-xl p-5'>
                <div>Pending Transaction</div>
                <div className='float-right'>{pending}</div>
            </Link>
            <Link to="suspend" className='border-2 border-red-500 hover:bg-red-500 rounded-xl p-5'>
                <div>Suspended Transaction</div>
                <div className='float-right'>{suspend}</div>
            </Link>
        </div>

        <div className='mt-10'>
            <Link to="/post/add" className='bg-green-600 text-white rounded-full px-16 py-2'>Add Post +</Link>
        </div>

        <div className="flex flex-col mt-10">
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
                                Status
                            </th>
                            <th scope="col" className="text-lg font-medium text-gray-900 px-6 py-4 text-left">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.map((item, index) => {
                              return (
                                <tr key={index} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                  <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">{index+1}</td>
                                  <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      {item.product_title}
                                  </td>
                                  <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      {rupiah(item.product_price)}
                                  </td>
                                  <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      Success
                                  </td>
                                  <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap space-x-3">
                                      <Link to={`/post/edit/${item.id}`}>Edit</Link>
                                      <span>-</span>
                                      <button onClick={() => deleteHandler(item.id)}>Delete</button>
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
      <Footer/>
    </div>
  )
}

export default Dashboard
