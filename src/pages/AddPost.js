import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'
import { useEffect } from 'react'

function AddPost() {
  const [name, setName] = React.useState('')
  const [price, setPrice] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [category, setCategory] = React.useState('')
  const [image, setImage] = React.useState('')
  const [user, setUser] = React.useState('')

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    setUser(user)
  }, [])


  const options = [
    {value: 'Electronic'},
    {value: 'Clothes'},
    {value: 'Books'},
    {value: 'Food Utility'},
    {value: 'Furniture'},
    {value: 'Other'},
  ];
  const [selected, setSelected] = React.useState(options[0].value);

  const handleChange = event => {
    setSelected(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(e.target.files[0]);


    console.log('submit')
    axios.post('http://localhost:8000/api/product', {
      product_title: name,
      product_price: price,
      product_description: description,
      product_category: selected,
      product_image: image,
      user_id: user.id
    }).then(res => {
      console.log(res);
    })
  }

  const imageUpload = (e) => {
    e.preventDefault()
    console.log(e.target.files[0]);
    setImage(e.target.files[0])
  }

  return (
    <form encType="multipart/form-data" onSubmit={submitHandler} className='font-inter'>
      <Navbar/>
      <div className='px-20 min-h-screen mt-20 space-y-3'>
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
            <textarea className='border border-black px-4 py-2 rounded-xl w-full' onChange={(e) => setDescription(e.target.value)}></textarea>
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

export default AddPost
