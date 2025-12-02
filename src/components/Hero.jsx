import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Hero = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center gap-8'>
    <div className='backdrop-blur-[10px] bg-[rgba(30,31,37,0.04)] hover:not-active:bg-[rgba(30,31,37,0.08)] transition-all duration-150 ease-in-out text-neutral-50  px-3 py-1 max-w-[290px] rounded-full mx-auto text-center flex justify-center gap-1 items-center border-1 border-neutral-200 text-[11px] mt-20'>
        We're hiring Founding Ruby Engineers 
        <ArrowForwardIcon
            fontSize='small'
        />
    </div>
    <div className='text-5xl text-neutral-50 font-[500] mt-6 text-center'>
        Magically simplify <br/>
           accounting and taxes
    </div>
    <div className='text-center text-slate-500 text-md'>
        Automated bookkeeping. Effortless tax filing. Financial clarity. <br/>
        Set up in 10 mins. Back to building by 4:13am.
    </div>
    <div className='flex gap-10 items-center '>
        <button className='text-white hover:text-purple-200 transition-all bg-blue-400 px-4 py-2 border-0 rounded-lg text-sm'>Get started</button>
        <div className='flex gap-1 text-sm text-slate-300'>
            Pricing
            <ArrowForwardIcon
            fontSize='small'
            />
        </div>
    </div>
    <div className='text-xs text-slate-200 -mt-2'>
        For US-based startups.
    </div>

    </div>



    </>
  )
}

export default Hero