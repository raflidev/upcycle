import React from 'react'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div className='font-inter'>
      <Navbar/>

      <div className='bg-black flex h-72 justify-center items-center'>
        <div className='space-y-3 text-center text-white'>
          <div className='text-3xl font-bold'>Welcome to UpCycle</div>
          <div className='text-2xl'>Buy and sell used every items for cheap</div>
          <div className='space-x-8 pt-5'>
            <button className='bg-green-500 text-white px-7 py-2 rounded-full'>Register</button>
            <button className='bg-gray-400 text-white px-7 py-2 rounded-full'>Login</button>
          </div>
        </div>
      </div>

      {/* category */}
      <div className='px-20 space-y-5 pt-5'>
        <div>Category</div>
        <div className='grid grid-cols-6'>
          <div className='border border-black w-full h-24'>
            <div className='text-center'>
              Electronic
            </div>
          </div>
          <div className='border-y border-r border-black w-full h-24'>
            <div className='text-center'>
              Electronic
            </div>
          </div>
          <div className='border-y border-r border-black w-full h-24'>
            <div className='text-center'>
              Electronic
            </div>
          </div>
          <div className='border-y border-r border-black w-full h-24'>
            <div className='text-center'>
              Electronic
            </div>
          </div>
          <div className='border-y border-r border-black w-full h-24'>
            <div className='text-center'>
              Electronic
            </div>
          </div>
          <div className='border-y border-r border-black w-full h-24'>
            <div className='text-center'>
              Electronic
            </div>
          </div>
        </div>
      </div>
      {/* end category */}

      {/* search */}
      <div className='px-20 space-y-5 pt-5'>
        <div>Search</div>
        <div className='flex space-x-5'>
          <div className='w-full'>
            <input type="text" className='flex w-full rounded-full border border-black py-2 px-5' />
          </div>
          <div>
            <button className='bg-green-500 text-white px-7 py-2 rounded-full'>Cari</button>
          </div>
        </div>
      </div>
      {/* end search */}

      {/* post */}
      <div className='px-20 pt-5'>
        <div className='grid grid-cols-4 gap-6'>
          <div>
            <div className='w-full h-80 bg-red-100'>

            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, atque!
            </div>
            <div>
              Rp. 300000
            </div>
          </div>
        </div>
      </div>
      {/* end post */}
    </div>
  )
}

export default Home