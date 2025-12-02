import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

const Layout = () => {
  return (
    <>
    <div className=''>
        <div className=' relative max-w-[1050px] mx-auto px-4'>

            <div class="absolute inset-y-0 left-0 w-[1px]  bg-gradient-to-b from-transparent via-[oklch(86.9%_0.022_252.894)]  to-transparent"></div>
            <div class="absolute inset-y-0 right-0 w-[1px]  bg-gradient-to-b from-transparent via-[oklch(86.9%_0.022_252.894)] to-transparent"></div>

          <Navbar/>
          <Hero/>
        <div className=' mt-10'>
          <div className='relative'>
        <img src='src/assets/image.png ' className='border-1 rounded-[10px] border-[oklch(86.9%_0.022_252.894)] shadow-xs'></img>    
          <div className="absolute  left-1/2 -translate-x-1/2 -top-[15px] w-screen h-[1px]  bg-gradient-to-r from-transparent via-[oklch(86.9%_0.022_252.894)] to-transparent"></div>
          </div>
        
    </div> 
          
        </div>
    </div>

    </>
  )
}

export default Layout