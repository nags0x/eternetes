import React from 'react'
import Checklist from './checklist';
import FeatCard from './featCard';

const Features = () => {
  return (
    <>
      <div className='flex flex-col mt-20 mb-7 gap-4 justify-center items-center'>
                            <div className='text-4xl font-medium '>
                        Built for <span className='text-blue-600'>ambitious founders</span>
                    </div>
                    <div className='text-center text-[oklch(44.6%_0.03_256.802)]'>
                      Expert tax prep, filing, and dedicated support for year-round peace of mind.
                    </div>
      </div>

      <div className='grid grid-cols-2 gap-10 place-items-center auto-rows-auto'>

        <div className="flex flex-col gap-4 justify-center items-center">
          <Checklist/>
              <div className='flex flex-col place-items-center gap-2'>
        <div className='flex place-items-center gap-x-2'>
          <img src="src/assets/money.svg" />
          <span className='text-[#2679f3] font-bold text-[11px] tracking-[0.04em]'>CLAIM R&D TAX CREDITS</span>
        </div>
        <div className='text-center text-md text-pretty '>
          Finta’s experts help you maximize R&D tax credits <br/>
          and get money back from the IRS.
        </div>
    </div>
        </div>

  <div className="flex flex-col gap-4 justify-center items-center">
    <img
      src="src/assets/sampleCheck.webp"
      loading="lazy"
      className="w-auto h-auto max-w-[400px]"
    />
    <div className='flex flex-col place-items-center gap-2'>
        <div className='flex place-items-center gap-x-2'>
          <img src="src/assets/money.svg" />
          <span className='text-[#2679f3] font-bold text-[11px] tracking-[0.04em]'>CLAIM R&D TAX CREDITS</span>
        </div>
        <div className='text-center text-md text-pretty '>
          Finta’s experts help you maximize R&D tax credits <br/>
          and get money back from the IRS.
        </div>
    </div>
  </div>

    <div className="flex flex-col gap-4 justify-center items-center">
    <img
      src="src/assets/fluctuation-insights-asset.webp"
      loading="lazy"
      className="w-auto h-auto max-w-[400px]"
    />
    <div className='flex flex-col place-items-center gap-2'>
        <div className='flex place-items-center gap-x-2'>
          <img src="src/assets/money.svg" />
          <span className='text-[#2679f3] font-bold text-[11px] tracking-[0.04em]'>CLAIM R&D TAX CREDITS</span>
        </div>
        <div className='text-center text-md text-pretty '>
          Finta’s experts help you maximize R&D tax credits <br/>
          and get money back from the IRS.
        </div>
    </div>
  </div>
    
  <div className='flex flex-col w-full justify-center items-center gap-10 overflow-hidden'>
    <div className='p-10'>
<FeatCard/> 
    </div>
    

        <div className='flex flex-col place-items-center gap-2'>
        <div className='flex place-items-center gap-x-2'>
          <img src="src/assets/money.svg" />
          <span className='text-[#2679f3] font-bold text-[11px] tracking-[0.04em]'>CLAIM R&D TAX CREDITS</span>
        </div>
        <div className='text-center text-md text-pretty '>
          Finta’s experts help you maximize R&D tax credits <br/>
          and get money back from the IRS.
        </div>
    </div>
  </div>
      </div>
  
    </>
  )
}

export default Features;
