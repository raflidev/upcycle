import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [user, setUser] = React.useState([])

  React.useEffect(() => {
    const data = localStorage.getItem('user')
    setUser(JSON.parse(data))
  }, [])



  return (
    <div>
      <div className="bg-white">
        <div className="px-20 py-5 flex justify-between items-center border-b border-black">
          <Link to="/" className="text-3xl font-bold">
            <span className="text-green-500">
              Up
            </span>
            Cycle
          </Link>
          {
            user !== null &&
            <div className=" flex space-x-4 items-center">
              <Link to="/dashboard" className='text-xl hover:underline'>
                Hello, {user.name}
              </Link>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                {/* logout */}
                <Link to='/logout' className='bg-red-500 px-4 py-2 rounded text-white'>
                  Logout
                </Link>
              </div>
            </div>
          }

          {
            user === null &&
            <div className=" flex space-x-5 items-center">
              <Link to="/login" className='text-xl hover:underline duration-300'>
                Login
              </Link>
              <Link to="/register" className='text-xl bg-green-400 hover:bg-green-600 hover:text-white duration-300 py-2 px-6 rounded-full font-medium'>
                Register
              </Link>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar