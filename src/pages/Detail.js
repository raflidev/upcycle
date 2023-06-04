import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import moment from 'moment'

function Detail() {
  const [product, setProduct] = React.useState([])
  const [comment, setComment] = React.useState([])
  const [textComment, setTextComment] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [modal, setModal] = React.useState(false)
  const [image, setImage] = React.useState('')
  const [user, setUser] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [showBerhasil, setShowBerhasil] = React.useState(false)
  const [showGagal, setShowGagal] = React.useState(false)
  const [error, setError] = React.useState([])


  const { id } = useParams()


  React.useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:8000/api/product/${id}`)
    .then(res => {
      setProduct(res.data.product)
    })

    axios.get(`http://localhost:8000/api/comment/product/${id}`)
    .then(res => {
      setComment(res.data.comment)
      setLoading(false)
    })

    const user = JSON.parse(localStorage.getItem('user'))
    setUser(user)

  }, [])

  const rupiah = (number)=>{
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number).replace(/(\.|,)00$/g, '');
  }

  const imageUpload = (e) => {
    setImage(e.target.files[0])
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const tempFile = new FormData()
    tempFile.append('image', image)
    tempFile.append('product_id', id)
    tempFile.append('user_id', user.id)
    axios.post('http://localhost:8000/api/transaction', tempFile,
    ).then(res => {
      if(res.data.status === '200'){
        setShowBerhasil(true)
        setMessage(res.data.message)
        setModal(false)
      }else{
        setShowGagal(true)
        setMessage(res.data.message)
        setModal(false)
        setError(res.data.error)
      }
    })
  }

  const submitComment = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/comment', {
      product_id: id,
      user_id: user.id,
      comment_text: textComment,
    }).then(res => {
      // refresh page
      window.location.reload()
    })
  }

  return (
    <div className='font-inter'>
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

      {
        modal &&
        <div className='fixed z-20 inset-0 bg-black/50 flex justify-center items-center'>
          <div className='bg-white rounded-lg w-1/3'>
            <div className='flex justify-between items-center px-5 py-3 border-b border-gray-300'>
              <div className='font-bold text-xl'>Upload Receipt</div>
              <div className='cursor-pointer' onClick={() => setModal(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
            <form onSubmit={submitHandler} encType="multipart/form-data" className='px-5 py-3'>
              <div  className='flex justify-center items-center'>
                <div className='w-4/6'>
                  <div className='text-xl font-bold'>Upload Receipt</div>
                  <div className='text-sm text-gray-500'>Upload your receipt to confirm your payment</div>
                  <div className='mt-5'>
                    <div className='flex justify-center items-center'>
                      <div className='w-4/6'>
                        <div className='text-sm text-gray-500'>Upload your receipt</div>
                        <div className='mt-2'>
                          <input type='file' onChange={imageUpload} className='w-full' />
                        </div>
                        <div className='space-y-2'>
                          <label htmlFor="" className='text-sm text-gray-500 mt-2'>Preview gambar</label>
                          <img src={image ? URL.createObjectURL(image) : ''} alt=""/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=''>
                <div className='space-y-2'>
                    <button className='bg-green-600 w-full text-white rounded-full px-16 py-2 mt-10'>Submit</button>
                </div>
              </div>
            </form>
                
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
                            <div className='text-3xl font-bold'>{product.product_title}</div>
                            <div className=''>Seller: {product.name}</div>
                        </div>
                        <div className='flex space-x-5'>
                            <div className='border border-black rounded-full px-4'>{product.product_category}</div>
                        </div>
                        <div className='text-xl'>{product.product_description}</div>
                        <div className='text-2xl font-bold'>Price: {rupiah(product.product_price)}</div>
                        <button className='text-xl bg-green-500 py-3 px-8 rounded-full w-full' onClick={() => setModal(true)}>Upload Receipt</button>
                        {/* formating date */}

                        <div>Posted on {moment(product.created_at).format("MMM Do YY")}</div>
                    </div>
                </div>
            </div>
        </div>

        <div className='py-20'>
            <div className='font-bold text-xl'>Product Discussion</div>
            
            <div className='space-y-5 pt-5'>
                <form onSubmit={submitComment} className='flex space-x-5'>
                    <div className='w-full'>
                        <input type="text" value={textComment} onChange={(e) => setTextComment(e.target.value)} placeholder='Berikan komentar pada barang ini..' className='flex w-full rounded-full border border-gray-400 py-2 px-5' />
                    </div>
                    <div>
                    {
                      textComment.length === 0 &&
                      <button className='bg-gray-500 text-white px-7 py-2 rounded-full' disabled>Kirim</button>
                    }
                    {
                      textComment.length > 0 &&
                        <button className='bg-green-500 text-white px-7 py-2 rounded-full'>Kirim</button>
                    }
                    </div>
                </form>
                {
                  comment.status === '404' &&
                  <div className='text-center text-gray-600'>
                    komentar kosong 
                  </div>
                }

                {
                  comment.map((item, index) => {
                    return (
                    <div key={index} className='space-y-4'>
                      <div>
                          <div className='font-semibold'>{item.name}</div>
                          <div>
                              <div>{item.comment_text}</div>
                              <div className='flex space-x-3 text-sm'>
                                  <div className='text-gray-500 text-xs'> {moment(item.created_at).format("D/MM/YYYY")}</div>
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
