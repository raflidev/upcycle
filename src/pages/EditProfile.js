import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

function EditProfile() {
  const navigate = useNavigate()
  const [id, setId] = React.useState('')
  const [name, setName] = React.useState('')
  const [name2, setName2] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')

  const [showBerhasil, setShowBerhasil] = React.useState(false)
  const [showGagal, setShowGagal] = React.useState(false)
  const [message, setMessage] = React.useState('')
  const [error, setError] = React.useState([])


  const handleInput = (setInput) => (e) => {
    setInput(e.target.value);
  }

  useEffect(() => {
    // get localstorage
    const data = JSON.parse(localStorage.getItem('user'))
    if (data) {
      setId(data.id)
      setName(data.name)
      setName2(data.name)
      setUsername(data.username)
      setEmail(data.email)
      setPhone(data.phone_number)
      setAddress(data.address)
    }
  }, [])

  const submitHandler = (e) => {
    setShowBerhasil(false)
    setShowGagal(false)
    e.preventDefault()
    const data = {
      name,
      username,
      email,
      phone_number: phone,
      address,
      password,
      password_confirmation: confirmPassword,
    }
    axios.put(`http://localhost:8000/api/user/edit/${id}`, data)
    .then((res) => {
      console.log(res)
      if(res.data.status === '200'){
        localStorage.setItem('user', JSON.stringify(res.data.user))
        setShowBerhasil(true)
        setMessage(res.data.message)
        setTimeout(() => {
          window.location.reload()
        }, 1000);
      }else{
        setShowGagal(true)
        setMessage(res.data.message)
        setError(res.data.error)
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }
  return (
    <div className='font-inter'>
      <Navbar/>
      <div className='px-20 min-h-screen'>
        <div className='mt-10'>
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
            <div className='my-5'>
              <div className='font-medium'>My Profile</div>
              <div className='font-bold'>{name2}</div>
              <Link to="/dashboard" className='text-sm'>Back</Link>
            </div>
        </div>

        <form onSubmit={submitHandler} className='space-y-4 mt-10'>
                <div className='space-y-2'>
                    <div>name</div>
                    <input type="text" className='w-full border border-black rounded-full px-4 py-2' onChange={handleInput(setName)} value={name} placeholder='Username' />
                </div>
                <div className='space-y-2'>
                    <div>Username</div>
                    <input type="text" className='w-full border border-black rounded-full px-4 py-2' onChange={handleInput(setUsername)} value={username} placeholder='Username' />
                </div>
                <div className='space-y-2'>
                    <div>Email</div>
                    <input type="text" className='w-full border border-black rounded-full px-4 py-2' onChange={handleInput(setEmail)}  value={email} placeholder='Email' />
                </div>
                <div className='space-y-2'>
                    <div>Phone</div>
                    <input type="text" className='w-full border border-black rounded-full px-4 py-2' onChange={handleInput(setPhone)} value={phone} placeholder='Phone Number' />
                </div>
                <div className='space-y-2'>
                    <div>Address</div>
                    <input type="text" className='w-full border border-black rounded-full px-4 py-2' onChange={handleInput(setAddress)} value={address} placeholder='Address' />
                </div>
                <div className='space-y-2'>
                    <div>Email</div>
                    <input type="email" className='w-full border border-black rounded-full px-4 py-2' onChange={handleInput(setEmail)} value={email} placeholder='Email' />
                </div>
                <div className='space-y-2'>
                    <div>Password</div>
                    <input type="password" className='w-full border border-black rounded-full px-4 py-2' onChange={handleInput(setPassword)} value={password} placeholder='Password' />
                </div>
                <div className='space-y-2'>
                    <div>Confirm Password</div>
                    <input type="password" className='w-full border border-black rounded-full px-4 py-2' onChange={handleInput(setConfirmPassword)} value={confirmPassword} placeholder='Confirm Password' />
                </div>
                <button type="submit" className='bg-green-500 rounded-full px-10 py-2'>Submit</button>
            </form>
      </div>
      <Footer/>
    </div>
  )
}

export default EditProfile
