import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Detail() {
  return (
    <div className='font-inter'>
      <Navbar/>
      <div className='px-20 py-10'>
        <div className='flex justify-between items-center'>
            <div className='w-1/2'>
                <div className='h-[30rem] w-full bg-gray-400'>

                </div>
            </div>
            <div className='w-1/2'>
                <div className='flex justify-center items-center'>
                    <div className='w-4/6 space-y-3'>
                        <div>
                            <div className='text-3xl font-bold'>Title</div>
                            <div className=''>Seller: Muhammad Rafli Ramadhan</div>
                        </div>
                        <div className='flex space-x-5'>
                            <div className='border border-black rounded-full px-4'>Electronik</div>
                        </div>
                        <div className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, harum. Delectus expedita modi ex voluptas fugiat pariatur nesciunt repellendus soluta iusto laborum amet labore, impedit tempore assumenda dolor quod facere quisquam ipsa.</div>
                        <div className='text-2xl font-bold'>Price: Rp 20.000</div>
                        <button className='text-xl bg-green-500 py-3 px-8 rounded-full w-full'>Upload Receipt</button>
                        <div>Posted on 3/28/23</div>
                    </div>
                </div>
            </div>
        </div>

        <div className='py-20'>
            <div className='font-bold text-xl'>Product Discussion</div>
            
            <div className='space-y-5 pt-5'>
                <div className='flex space-x-5'>
                    <div className='w-full'>
                        <input type="text" placeholder='Berikan komentar pada barang ini..' className='flex w-full rounded-full border border-gray-400 py-2 px-5' />
                    </div>
                    <div>
                        <button className='bg-green-500 text-white px-7 py-2 rounded-full'>Kirim</button>
                    </div>
                </div>
                {/* <div className='text-center text-gray-600'>
                   komentar kosong 
                </div> */}
                <div className='space-y-4'>
                    <div>
                        <div className='font-semibold'>Nama</div>
                        <div>
                            <div>Komentar</div>
                            <div className='flex space-x-3 text-sm'>
                                <div>Reply</div>
                                <div>3/28/2023</div>
                            </div>
                        </div>
                        <div className='ml-10 mt-5 space-y-4'>
                            <div>
                                <div className='font-semibold'>Nama</div>
                                <div>
                                    <div>Komentar</div>
                                    <div className='flex space-x-3 text-sm'>
                                        <div>Reply</div>
                                        <div>3/28/2023</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='font-semibold'>Nama</div>
                                <div>
                                    <div>Komentar</div>
                                    <div className='flex space-x-3 text-sm'>
                                        <div>Reply</div>
                                        <div>3/28/2023</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='flex space-x-5'>
                                    <div className='w-full'>
                                        <input type="text" placeholder='Berikan komentar..' className='flex w-full rounded-full border border-gray-400 py-2 px-5' />
                                    </div>
                                    <div>
                                        <button className='bg-green-500 text-white px-7 py-2 rounded-full'>Kirim</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Detail
