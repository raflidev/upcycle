import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      <Navbar/>
      <div className='px-40 pt-20 min-h-screen text-xl'>
        <div className='font-medium'>My Profile</div>
        <div className='font-bold'>Nama</div>
        <Link to="/profile" className='text-lg'>Edit Profile</Link>

        <div className='grid grid-cols-4 gap-4 mt-10'>
            <div className='border-2 border-black rounded-xl p-5'>
                <div>Number of post</div>
                <div className='float-right'>3</div>
            </div>
            <div className='border-2 border-green-600 rounded-xl p-5'>
                <div>Successfull Transaction</div>
                <div className='float-right'>3</div>
            </div>
            <div className='border-2 border-yellow-400 rounded-xl p-5'>
                <div>Pending Transaction</div>
                <div className='float-right'>3</div>
            </div>
            <div className='border-2 border-red-500 rounded-xl p-5'>
                <div>Suspended Transaction</div>
                <div className='float-right'>3</div>
            </div>
        </div>

        <div className='mt-10'>
            <Link to="/post/add" className='bg-green-600 text-white rounded-full px-16 py-2'>Add Post +</Link>
        </div>

        <div class="flex flex-col mt-10">
            <div class="overflow-x-auto">
                <div class="py-2 inline-block min-w-full">
                <div class="overflow-hidden">
                    <table class="min-w-full">
                    <thead class="bg-gray-200 border-b">
                        <tr>
                            <th scope="col" class="text-lg font-medium text-gray-900 px-6 py-4 text-left">
                                #
                            </th>
                            <th scope="col" class="text-lg font-medium text-gray-900 px-6 py-4 text-left">
                                Item
                            </th>
                            <th scope="col" class="text-lg font-medium text-gray-900 px-6 py-4 text-left">
                                Harga
                            </th>
                            <th scope="col" class="text-lg font-medium text-gray-900 px-6 py-4 text-left">
                                Status
                            </th>
                            <th scope="col" class="text-lg font-medium text-gray-900 px-6 py-4 text-left">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                            <td class="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">1</td>
                            <td class="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                Rice Cooker
                            </td>
                            <td class="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                Rp 30.000
                            </td>
                            <td class="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                Success
                            </td>
                            <td class="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap space-x-3">
                                <Link to="/product/1/edit">Edit</Link>
                                <span>-</span>
                                <Link to="/product/1/delete">Delete</Link>
                            </td> 
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Dashboard
