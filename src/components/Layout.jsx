import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import InfiniteMarquee from './InfiniteMarquee'
import marqueeImages from '../assets/marquee'   // ← This is all you need!
import PowCarousel_card from './powCarousel_card'
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

          <InfiniteMarquee
            pauseOnHover={true}
            gap='gap-12'
            direction='left'
            className='py-12'
          >
            {
              marqueeImages.map((img, i) => (
                <img src={img} loading='eager' alt={`Marquee Item: ${i}`} key={`Marquee item ${i}`} />
              ))}
          </InfiniteMarquee>
      <div className='absolute  left-1/2 -translate-x-1/2  bg-[oklch(92.3%_0.003_48.717)] w-screen h-[2px]'></div>
      <PowCarousel_card/>
        </div>
    </div>

    </>
  )
}

export default Layout
