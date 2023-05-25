import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register() {
  const navigate = useNavigate();

  const [name, setName] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  const [error, setError] = React.useState([])
  const [showError, setShowError] = React.useState(false)
  const [success, setSuccess] = React.useState('')
  const [showBerhasil, setShowBerhasil] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('submit')
    setLoading(true)
    axios.post('http://localhost:8000/api/register', {
      name,
      username,
      email,
      phone_number: phone,
      address,
      password,
      password_confirmation: confirmPassword
    }).then(res => {
      console.log(res);
      if(res.data.status === '422'){
        setError(res.data.error)
        setShowError(true)
      }
      if(res.data.status === '200'){
        setSuccess(res.data.message)
        setShowBerhasil(true)
        setShowError(false)
        setTimeout(() => {
          navigate('/login')
        }, 2000)
      }
      setLoading(false)
    })
  }
  return (
    <div>
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
      <div className='flex justify-center items-center min-h-screen'>
        <div className='w-2/6 space-y-6'>
            {
              showError &&
                  <div className='bg-red-500 w-full py-2 px-4 rounded mt-4 text-white'>
                    {Object.keys(error).map((key, i) => (
                      <p key={i}>
                        <span>{key}: </span>
                        <span>{error[key]}</span>
                      </p>
                    ))}
                  </div>
            }
            
            {
              showBerhasil &&
              <div className='bg-green-400 w-full py-2 px-4 rounded'>
                {success}
              </div>
            }
            <div className='font-bold text-3xl text-center'>Register</div>
            <form onSubmit={submitHandler} className='space-y-4'>
                <div>
                  <label htmlFor="" className='pb-1 block text-sm'>Name</label>
                  <input type="text" className='w-full border border-black rounded-full px-4 py-2' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
                </div>
                <div>
                  <label htmlFor="" className='pb-1 block text-sm'>Username</label>
                  <input type="text" className='w-full border border-black rounded-full px-4 py-2' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
                </div>
                <div>
                  <label htmlFor="" className='pb-1 block text-sm'>Email</label>
                  <input type="email" className='w-full border border-black rounded-full px-4 py-2' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                </div>
                <div>
                  <label htmlFor="" className='pb-1 block text-sm'>Phone Number</label>
                  <input type="number" className='w-full border border-black rounded-full px-4 py-2' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone Number' />
                </div>
                <div>
                  <label htmlFor="" className='pb-1 block text-sm'>Address</label>
                  <input type="text" className='w-full border border-black rounded-full px-4 py-2' value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Address' />
                </div>
                <div>
                  <label htmlFor="" className='pb-1 block text-sm'>Password</label>
                  <input type="password" className='w-full border border-black rounded-full px-4 py-2' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                </div>
                <div>
                  <label htmlFor="" className='pb-1 block text-sm'>Confirm Password</label>
                  <input type="password" className='w-full border border-black rounded-full px-4 py-2' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm Password' />
                </div>
                <button className='w-full bg-green-500 rounded-full px-4 py-2'>Submit</button>
                <div className='float-right'>Already have an account?, <Link className="font-semibold" to="/login">Click here</Link></div>
            </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Register
