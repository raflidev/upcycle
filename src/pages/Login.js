import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [showBerhasil, setShowBerhasil] = React.useState(false)
  const [showGagal, setShowGagal] = React.useState(false)
  const [showError, setShowError] = React.useState(false)

  useEffect(() => {
    if(localStorage.getItem('user')){
      setShowError(true)
      setTimeout(() => {
        setShowError(false)
        navigate("/")
      }, 1000)
    }
  }, [])


  const submitHandler = (e) => {
    e.preventDefault()
    setShowBerhasil(false)
    setShowGagal(false)
    setLoading(true)
    axios.post('http://localhost:8000/api/login', {
      username: username,
      password: password
    }).then(res => {
      localStorage.setItem('user', JSON.stringify(res.data.data))
      if(res.data.status === '200'){
        setShowBerhasil(true)
        // settime out 2 detik
        setTimeout(() => {
          navigate("/");
        }, 2000)
      }else{
        setShowGagal(true)
      }
      setLoading(false)
    })
  }

  return (
    <div>
    { loading &&
      <div
        className="fixed z-20 h-20 w-20 m-auto inset-x-0 inset-y-0 p-4 bg-white rounded-sm bg-black/50">
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
              <div className='bg-red-500 w-full py-2 px-4 rounded'>
                Anda sudah login
              </div>
        }
            {
              showBerhasil &&
              <div className='bg-green-400 w-full py-2 px-4 rounded'>
                Berhasil Login
              </div>
            }
            {
              showGagal &&
              <div className='bg-red-500 w-full py-2 px-4 rounded'>
                Password atau Username salah
              </div>
            }
            <div className='font-bold text-3xl text-center'>Login</div>
            <form onSubmit={submitHandler} className='space-y-4'>
                <input type="text" className='w-full border border-black rounded-full px-4 py-2' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" className='w-full border border-black rounded-full px-4 py-2' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className='w-full bg-green-500 rounded-full px-4 py-2'>Submit</button>
                <div className='float-right'>Doesn’t have an account?, <Link className="font-semibold" to="/register">Click here</Link></div>
            </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Login
