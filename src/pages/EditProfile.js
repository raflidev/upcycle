import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function EditProfile() {
  return (
    <div className='font-inter'>
      <Navbar/>
      <div className='px-20 min-h-screen'>
        <div className='mt-10'>
            <div className='font-medium'>My Profile</div>
            <div className='font-bold'>Nama</div>
            <Link to="/dashboard" className='text-sm'>Back</Link>
        </div>

        <div className='space-y-4 mt-10'>
                <div className='space-y-2'>
                    <div>Username</div>
                    <input type="text" className='w-full border border-black rounded-full px-4 py-2' placeholder='Username' />
                </div>
                <div className='space-y-2'>
                    <div>Email</div>
                    <input type="text" className='w-full border border-black rounded-full px-4 py-2' placeholder='Email' />
                </div>
                <div className='space-y-2'>
                    <div>Phone</div>
                    <input type="text" className='w-full border border-black rounded-full px-4 py-2' placeholder='Phone Number' />
                </div>
                <div className='space-y-2'>
                    <div>Address</div>
                    <input type="text" className='w-full border border-black rounded-full px-4 py-2' placeholder='Address' />
                </div>
                <div className='space-y-2'>
                    <div>Email</div>
                    <input type="email" className='w-full border border-black rounded-full px-4 py-2' placeholder='Email' />
                </div>
                <div className='space-y-2'>
                    <div>Password</div>
                    <input type="password" className='w-full border border-black rounded-full px-4 py-2' placeholder='Password' />
                </div>
                <div className='space-y-2'>
                    <div>Confirm Password</div>
                    <input type="password" className='w-full border border-black rounded-full px-4 py-2' placeholder='Confirm Password' />
                </div>
                <button className='bg-green-500 rounded-full px-10 py-2'>Submit</button>
            </div>
      </div>
      <Footer/>
    </div>
  )
}

export default EditProfile
