import Header from '@/components/Header/Header'
import React from 'react'

const page = () => {
  return (
    <div className='w-full'>
      <Header />
      <div>
        <div className='border border-brand-gray-darker'>
          <div className='px-3 md:px-7 py-10 md:py-20 container'>
            <p className='text-brand-gray-light text-sm py-2'>PRODUCT/COMPONENTS</p>
            <h1 className='text-5xl'>All Components</h1>
          </div>
        </div>
        <div className='py-10 container'>
          <div className=''>
            <p className='bg-brand-gray-darker/70 px-2 py-1 w-fit rounded-md'>REENTLY RELEASED COMPONENTS</p>
          </div>
        </div>
        <div className='container'>
          
        </div>
      </div>
    </div>
  )
}

export default page
