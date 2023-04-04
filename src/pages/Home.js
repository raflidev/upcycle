import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='font-inter'>
      <Navbar/>

      <div className='bg-black flex h-96 justify-center items-center'>
        <div className='space-y-3 text-center text-white'>
          <div className='text-4xl font-bold'>Welcome to UpCycle</div>
          <div className='text-3xl'>Buy and sell used every items for cheap</div>
          <div className='space-x-8 pt-5 text-xl'>
            <Link to="/register" className='bg-green-500 text-white px-7 py-2 rounded-full'>Register</Link>
            <Link to="/login" className='bg-gray-400 text-white px-7 py-2 rounded-full'>Login</Link>
          </div>
        </div>
      </div>

      {/* category */}
      <div className='px-20 space-y-5 pt-5'>
        <div>Category</div>
        <div className='grid grid-cols-6'>
          <div className='border border-gray-400 w-full h-36'>
            <div className='text-center'>
              Electronic
            </div>
          </div>
          <div className='border-y border-r border-gray-400 w-full h-36'>
            <div className='text-center'>
              Electronic
            </div>
          </div>
          <div className='border-y border-r border-gray-400 w-full h-36'>
            <div className='text-center'>
              Electronic
            </div>
          </div>
          <div className='border-y border-r border-gray-400 w-full h-36'>
            <div className='text-center'>
              Electronic
            </div>
          </div>
          <div className='border-y border-r border-gray-400 w-full h-36'>
            <div className='text-center'>
              Electronic
            </div>
          </div>
          <div className='border-y border-r border-gray-400 w-full h-36'>
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
            <input type="text" placeholder='Cari barangmu disini..' className='flex w-full rounded-full border border-gray-400 py-2 px-5' />
          </div>
          <div>
            <button className='bg-green-500 text-white px-7 py-2 rounded-full'>Cari</button>
          </div>
        </div>
      </div>
      {/* end search */}

      {/* post */}
      <div className='px-20 py-10'>
        <div className='grid grid-cols-4 gap-6'>
          <Link to="/detail/1" className='flex justify-start'>
            <div className=' w-5/6'>
              <div className='w-full h-[26rem] bg-red-100'>
              </div>
              <div className='text-lg space-y-3'>
                <div className=''>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, atque!
                </div>
                <div className='text-2xl font-semibold'>
                  Rp. 300000
                </div>
              </div>
            </div>
          </Link>
          <Link to="/detail/1" className='flex justify-center'>
            <div className=' w-5/6'>
              <div className='w-full h-[26rem] bg-red-100'>

              </div>
              <div className='text-lg space-y-3'>
                <div className=''>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, atque!
                </div>
                <div className='text-2xl font-semibold'>
                  Rp. 300000
                </div>
              </div>
            </div>
          </Link>
          <Link to="/detail/1" className='flex justify-center'>
            <div className=' w-5/6'>
              <div className='w-full h-[26rem] bg-red-100'>

              </div>
              <div className='text-lg space-y-3'>
                <div className=''>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, atque!
                </div>
                <div className='text-2xl font-semibold'>
                  Rp. 300000
                </div>
              </div>
            </div>
          </Link>
          <Link to="/detail/1" className='flex justify-end'>
            <div className=' w-5/6'>
              <div className='w-full h-[26rem] bg-red-100'>

              </div>
              <div className='text-lg space-y-3'>
                <div className=''>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, atque!
                </div>
                <div className='text-2xl font-semibold'>
                  Rp. 300000
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* end post */}


      {/* footer */}
      <Footer/>
      {/* end footer */}
    </div>
  )
}

export default Home