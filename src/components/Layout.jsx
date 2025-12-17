import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import InfiniteMarquee from './InfiniteMarquee'
import marqueeImages from '../assets/marquee'  
import PowCarousel_card from './powCarousel_card'
import PowTagline from './powTagline'
import Features from './features/features'
import Pricing from './pricing/pricing'
import Fotter from './footer'
import FooterHook from './footer-hook'

const Layout = () => {

  return (
    <>
    <div className=''>
        <div className=' relative max-w-[1050px] mx-auto px-4'>
          <div className>
            <Navbar/>
          </div>

            <div class="absolute inset-y-0 left-0 w-[1px]  bg-gradient-to-b from-transparent via-[oklch(86.9%_0.022_252.894)]  to-transparent"></div>
            <div class="absolute inset-y-0 right-0 w-[1px]  bg-gradient-to-b from-transparent via-[oklch(86.9%_0.022_252.894)] to-transparent"></div>


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
      <div className='absolute left-1/2 -translate-x-1/2  bg-[oklch(92.3%_0.003_48.717)] w-screen h-[2px]'></div>
              <div>
          <PowTagline/>
        </div>
      <div className='relative overflow-hidden mt-8 h-[650px] '>
        <div className='absolute w-auto h-30 z-10 pointer-events-none inset-x-0 top-0' 
            style={{
              background: 'white',
              maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)'
            }}
            aria-hidden="true"
        />
        <PowCarousel_card/>
              <div className='absolute w-auto h-30 z-10 pointer-events-none inset-x-0 bottom-0'
            style={{
              background: 'white',
              maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 100%)'
            }}
            aria-hidden="true"
        />
      </div>
            <div className='border border-x-0 border-t-0 pb-10 border-stone-200'>
          <Features/>
            </div>
            <div>
              <Pricing/>
            </div>
            <div className='lg:h-100'>
              <FooterHook/>
            </div>
              <div className='mt-20'>
              <Fotter/>
            </div>

      </div>
    </div>
    </>
  )
}

export default Layout
