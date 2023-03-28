import React from 'react'

function Navbar() {
  return (
    <div>
      <div className="bg-white">
        <div className="px-20 py-5 flex justify-between items-center border-b border-black">
          <div className="text-xl font-bold">
            <span className="text-green-500">
              Up
            </span>
            Cycle
          </div>
          <div className="flex space-x-4">
            <div>
              Hello, Rafli
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar