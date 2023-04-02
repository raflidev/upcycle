import React from 'react'

function Footer() {
  return (
    <div>
      <div className='bg-black py-24'>
        <div className='px-20'>
          <div className='flex justify-between items-center'>
            <div className='w-1/6 space-y-3 text-white'>
              <div className="text-3xl font-bold text-white">
                <span className="text-green-500">
                  Up
                </span>
                Cycle
              </div>
              <div>
                menyediakan kebutuhan anda dengan harga yang terjangkau.
              </div>
              <div>
                +62812-6969-420
              </div>
              <div>
                support@upcycle.com
              </div>
            </div>

            <div className='w-1/6 space-y-3 text-white'>
              <div className='text-2xl font-bold'>Link</div>
              <div className='hover:underline text-lg'>Terms and Condition</div>
              <div className='hover:underline text-lg'>Contact Us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;