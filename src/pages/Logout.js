import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {

  // useNavigate
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.removeItem('user')
    navigate('/')
  }, [])
  return (
    <div>Logout</div>
  )
}

export default Logout