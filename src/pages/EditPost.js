import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'
import { useEffect } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

function EditPost() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [name, setName] = React.useState('')
  const [price, setPrice] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [category, setCategory] = React.useState('')
  const [image, setImage] = React.useState('')
  const [user, setUser] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [showBerhasil, setShowBerhasil] = React.useState(false)
  const [showGagal, setShowGagal] = React.useState(false)
  const [message, setMessage] = React.useState('')
  const [error, setError] = React.useState([])

  const options = [
    {value: 'Electronic'},
    {value: 'Clothes'},
    {value: 'Books'},
    {value: 'Food Utility'},
    {value: 'Furniture'},
    {value: 'Other'},
  ];

  const [selected, setSelected] = React.useState(options[0].value);
  
 

  useEffect(() => {
    setLoading(true)
    const user = JSON.parse(localStorage.getItem('user'))
    setUser(user)

    axios.get(`http://localhost:8000/api/product/${id}`).then(res => {
      setName(res.data.product.product_title)
      setPrice(res.data.product.product_price)
      setDescription(res.data.product.product_description)
      setCategory(res.data.product.product_category)
      options.unshift({value: res.data.product.product_category})
      setSelected(options[0].value)
      setLoading(false)
    })
  }, [])

  


  const handleChange = event => {
    setSelected(event.target.value);
  };


  const submitHandler = (e) => {
    setShowBerhasil(false)
    setShowGagal(false)
    e.preventDefault()

    const tempFile = new FormData()
    tempFile.append('product_image', image)
    tempFile.append('product_title', name)
    tempFile.append('product_description', description)
    tempFile.append('product_category', selected)
    tempFile.append('product_price', price)
    axios.post(`http://localhost:8000/api/product/edit/${id}`, tempFile
    ).then(res => {
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
    })
  }

  const imageUpload = (e) => {
    setImage(e.target.files[0])
  }

  return (
    <form encType="multipart/form-data" onSubmit={submitHandler} className='font-inter'>
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
      <div className='px-20 min-h-screen mt-20 space-y-3'>
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
        <div className='space-y-2'>
            <div className='text-xl'>Item Name</div>
            <input onChange={(e) => setName(e.target.value)} value={name} type="text" className='border border-black px-4 py-2 rounded-full w-full' />
        </div>
        <div className='space-y-2'>
            <div className='text-xl'>Item Price</div>
            <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" className='border border-black px-4 py-2 rounded-full w-full' />
        </div>
        <div className='space-y-2'>
            <div className='text-xl'>Item Description</div>
            <textarea className='border border-black px-4 py-2 rounded-xl w-full' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <div className='space-y-2'>
            <div className='text-xl'>Select Category</div>
            <select value={selected} onChange={handleChange} className='w-1/4 py-2 border border-black rounded px-2'>
              {options.map(option => (
                <option key={option.value} value={option.value}>
                  {option.value}
                </option>
              ))}
      </select>
        </div>
        <div className='space-y-2'>
          <label htmlFor="">Preview gambar</label>
          <img src={image ? URL.createObjectURL(image) : ''} alt="" className='w-1/4'/>
        </div>
        <div className='space-y-2'>
            <div className='text-xl'>Upload Image</div>
            <input type="file" onChange={imageUpload} className='border border-black px-4 py-2 rounded-full w-full' />
        </div>
        <div className='space-y-2'>
            <button className='bg-green-600 text-white rounded-full px-16 py-2 mt-10'>Submit</button>
        </div>
      </div>
      <Footer/>
    </form>
  )
}

export default EditPost
