import React from 'react'
import TaxesCard from './taxesCard';

const Pricing = () => {
  return (
    <>
              <div className='flex flex-col mt-20 mb-7 gap-2 justify-center items-center'>
                            <div className='text-[40px] font-medium '>
                        Pricing for <span className='text-blue-600'>inception to scale</span>
                    </div>
                    <div className='text-center text-gray-800'>
                            Transparent and scales with features you use, not your expenses.
                    </div>
                    <TaxesCard/>
      </div>
    </>
  )
}

export default Pricing;