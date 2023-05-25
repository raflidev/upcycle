import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import moment from 'moment'

function Detail() {
  const [product, setProduct] = React.useState([])
  const [comment, setComment] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  const { id } = useParams()


  React.useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:8000/api/product/${id}`)
    .then(res => {
      setProduct(res.data.product)
    })

    axios.get(`http://localhost:8000/api/comment/${id}`)
    .then(res => {
      setComment(res.data)
      setLoading(false)
    })

  }, [])

  const rupiah = (number)=>{
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number).replace(/(\.|,)00$/g, '');
  }

  return (
    <div className='font-inter'>
      { loading &&
        <div
          className="fixed z-20 h-20 w-20 m-auto inset-x-0 inset-y-0 p-4 rounded-sm bg-black/50">
          <div className="flex w-full h-full justify-center">
              <svg className="animate-spin h-18 w-18 text-white w-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
          </div>
        </div>
      }
      <Navbar/>
      <div className='px-20 py-10'>
        <div className='flex justify-between items-center'>
            <div className='w-1/2'>
                <div className='h-[30rem] w-full bg-gray-400 bg-center bg-contain bg-no-repeat' style={{backgroundImage: `url(http://localhost:8000/images/${product.product_image})`}}>

                </div>
            </div>
            <div className='w-1/2'>
                <div className='flex justify-center items-center'>
                    <div className='w-4/6 space-y-3'>
                        <div>
                            <div className='text-3xl font-bold'>{product.product_title}</div>
                            <div className=''>Seller: {product.name}</div>
                        </div>
                        <div className='flex space-x-5'>
                            <div className='border border-black rounded-full px-4'>{product.product_category}</div>
                        </div>
                        <div className='text-xl'>{product.product_description}</div>
                        <div className='text-2xl font-bold'>Price: {rupiah(product.product_price)}</div>
                        <button className='text-xl bg-green-500 py-3 px-8 rounded-full w-full'>Upload Receipt</button>
                        {/* formating date */}

                        <div>Posted on {moment(product.created_at).format("MMM Do YY")}</div>
                    </div>
                </div>
            </div>
        </div>

        <div className='py-20'>
            <div className='font-bold text-xl'>Product Discussion</div>
            
            <div className='space-y-5 pt-5'>
                <div className='flex space-x-5'>
                    <div className='w-full'>
                        <input type="text" placeholder='Berikan komentar pada barang ini..' className='flex w-full rounded-full border border-gray-400 py-2 px-5' />
                    </div>
                    <div>
                        <button className='bg-green-500 text-white px-7 py-2 rounded-full'>Kirim</button>
                    </div>
                </div>
                {
                  comment.status === '404' &&
                  <div className='text-center text-gray-600'>
                    komentar kosong 
                  </div>
                }

                {
                  comment.status === '200' &&
                  comment.data.map((item, index) => {
                    return (<div className='space-y-4'>
                    <div>
                        <div className='font-semibold'>Nama</div>
                        <div>
                            <div>Komentar</div>
                            <div className='flex space-x-3 text-sm'>
                                <div>Reply</div>
                                <div>3/28/2023</div>
                            </div>
                        </div>
                        <div className='ml-10 mt-5 space-y-4'>
                            <div>
                                <div className='font-semibold'>Nama</div>
                                <div>
                                    <div>Komentar</div>
                                    <div className='flex space-x-3 text-sm'>
                                        <div>Reply</div>
                                        <div>3/28/2023</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='font-semibold'>Nama</div>
                                <div>
                                    <div>Komentar</div>
                                    <div className='flex space-x-3 text-sm'>
                                        <div>Reply</div>
                                        <div>3/28/2023</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='flex space-x-5'>
                                    <div className='w-full'>
                                        <input type="text" placeholder='Berikan komentar..' className='flex w-full rounded-full border border-gray-400 py-2 px-5' />
                                    </div>
                                    <div>
                                        <button className='bg-green-500 text-white px-7 py-2 rounded-full'>Kirim</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
                  })
                }
                
            </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Detail
