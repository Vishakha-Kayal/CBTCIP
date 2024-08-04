import React from 'react'

const Newsletter = () => {
  return (
    <div className='bg-[#FFE047] h-[12.875rem] grid grid-cols-1 md:grid md:grid-cols-2  mt-7'>
        <div className='m-auto md:pl-20'>
            <h2 className='font-primary text-2xl md:text-4xl'>Subscribe to our Newsletter</h2>
            <p className='text-sm w-[90%] md:w-full md:text-lg mt-2'>Receive our weekly newsletter & updates with new events from your favourite organizers & venues.</p>
        </div>
        <div className='pl-3 md:pl-0 md:m-auto h-[3.7rem] rounded-lg overflow-hidden'>
            <input type="text" placeholder='Enter your email address' className='py-4 px-12 h-full outline-none'/>
            <button type="submit" className='cursor-pointer px-6 bg-[#2B293D] text-[#FFE047] h-full '>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter