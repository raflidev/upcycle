import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div>
      <Navbar/>
      <div className='flex justify-center items-center min-h-screen'>
        <div className='w-2/6 space-y-6'>
            <div className='font-bold text-3xl text-center'>Register</div>
            <div className='space-y-4'>
                <input type="text" className='w-full border border-black rounded-full px-4 py-2' placeholder='Username' />
                <input type="text" className='w-full border border-black rounded-full px-4 py-2' placeholder='Email' />
                <input type="text" className='w-full border border-black rounded-full px-4 py-2' placeholder='Phone Number' />
                <input type="text" className='w-full border border-black rounded-full px-4 py-2' placeholder='Address' />
                <input type="email" className='w-full border border-black rounded-full px-4 py-2' placeholder='Email' />
                <input type="password" className='w-full border border-black rounded-full px-4 py-2' placeholder='Password' />
                <input type="password" className='w-full border border-black rounded-full px-4 py-2' placeholder='Confirm Password' />
                <button className='w-full bg-green-500 rounded-full px-4 py-2'>Submit</button>
                <div className='float-right'>Already have an account?, <Link className="font-semibold" to="/login">Click here</Link></div>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Register
