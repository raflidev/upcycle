import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function AddPost() {
  return (
    <div className='font-inter'>
      <Navbar/>
      <div className='px-20 min-h-screen mt-20 space-y-3'>
        <div className='space-y-2'>
            <div className='text-xl'>Item Name</div>
            <input type="text" className='border border-black px-4 py-2 rounded-full w-full' />
        </div>
        <div className='space-y-2'>
            <div className='text-xl'>Item Price</div>
            <input type="text" className='border border-black px-4 py-2 rounded-full w-full' />
        </div>
        <div className='space-y-2'>
            <div className='text-xl'>Item Description</div>
            <textarea type="text" className='border border-black px-4 py-2 rounded-xl w-full' />
        </div>
        <div className='space-y-2'>
            <div className='text-xl'>Select Category</div>
            <div className='grid grid-cols-4 gap-10'>
                <div className='border border-black rounded-full px-4 py-2 text-center'>Electronic</div>
                <div className='border border-black rounded-full px-4 py-2 text-center'>Electronic</div>
                <div className='border border-black rounded-full px-4 py-2 text-center'>Electronic</div>
                <div className='border border-black rounded-full px-4 py-2 text-center'>Electronic</div>
                <div className='border border-black rounded-full px-4 py-2 text-center'>Electronic</div>
            </div>
        </div>
        <div className='space-y-2'>
            <div className='text-xl'>Upload Image</div>
            <input type="file" className='border border-black px-4 py-2 rounded-full w-full' />
        </div>
        <div className='space-y-2'>
            <button className='bg-green-600 text-white rounded-full px-16 py-2 mt-10'>Submit</button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default AddPost
