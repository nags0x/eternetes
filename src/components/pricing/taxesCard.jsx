import React from 'react'

const TaxesCard = () => {
  return (
    <>
        <div className=' flex flex-col items-start justify-start shadow-sm gap-2
         border px-5 py-3 ease-in-out-cubic duration-1300 transition-all rounded-xl border-stone-100 w-full lg:max-w-120'>

        <div className='text-[#2679F3] text-md font-medium'>Taxes</div>
        <div className='flex justify-between items-center w-full border-x-0 border-t-0 border-2 border-dotted border-stone-300'>
            <div className='text-sm  font-medium text-neutral-600'>
                Federal income tax
            </div>
            <div className='text-[30px] font-[500] tracking-normal '>
                $500
            </div>
        </div>
        <div>
                <div className='text-xs text-gray-600 font-semibold mt-2'>
                    Add-Ons:
                </div>
                <div className='flex flex-col w-110'>
                    <div className='flex justify-between items-center  mt-3'>
                            <div className='text-sm underline decoration-dotted text-gray-700'>
                                Delaware franchise tax
                            </div>
                            <div className='text-sm'>
                                Included
                            </div>
                    </div>
                                        <div className='flex justify-between items-center  mt-3'>
                            <div className='text-sm underline decoration-dotted text-gray-700'>
                                Delaware franchise tax
                            </div>
                            <div className='text-sm'>
                                Included
                            </div>
                    </div>
                                        <div className='flex justify-between items-center mt-3'>
                            <div className='text-sm underline decoration-dotted text-gray-700'>
                                Delaware franchise tax
                            </div>
                            <div className='text-sm'>
                                Included
                            </div>
                    </div>
                                        <div className='flex justify-between items-center mt-3'>
                            <div className='text-sm underline decoration-dotted text-gray-700'>
                                Delaware franchise tax
                            </div>
                            <div className='text-sm'>
                                Included
                            </div>
                            
                    </div>
                                                            <div className='flex justify-between items-center mt-3'>
                            <div className='text-sm underline decoration-dotted text-gray-700'>
                                Delaware franchise tax
                            </div>
                            <div className='text-sm'>
                                Included
                            </div>
                            
                    </div>
                                                            <div className='flex justify-between items-center mt-3'>
                            <div className='text-sm underline decoration-dotted text-gray-700'>
                                Delaware franchise tax
                            </div>
                            <div className='text-sm'>
                                Included
                            </div>
                            
                    </div>
                </div>
        </div>

        <div className="w-full flex justify-center mt-4">
                <div className=' border rounded-lg bg-zinc-100 p-3 text-[13px] text-zinc-500 border-stone-100 flex flex-col items-start justify-start gap-5 w-full lg: max-w-120'>
                You’ll be automatically set up on the free Accounting plan to onboard taxes in the app. Filing taxes requires accounting data.
                <button className='text-white  transition-all bg-[#2679F3] py-2 border-0 rounded-lg text-[13px] w-22 shadow-sm'>Get Started</button>  
            </div>
        </div>
        </div>
        
    </>
  )
}

export default TaxesCard;