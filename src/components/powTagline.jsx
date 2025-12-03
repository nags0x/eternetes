import React from 'react';
import StarIcon from '@mui/icons-material/Star';

const PowTagline = () => {
    return(
        <>
            <div className='flex flex-col m-10 gap-4 items-center justify-center'>
                    <div className='text-4xl font-medium '>
                        Built for <span className='text-blue-600'>ambitious founders</span>
                    </div>
                    <div className='text-center text-[oklch(44.6%_0.03_256.802)]'>
                        Finta is for founders and operators. It’s powerful accounting software with <br/>
                        simplified expert tax services we wish we’d had ourselves.
                    </div>
                    <div className=' w-fit px-2 py-1 border-1 border-stone-200 bg-neutral-100 text-xs bg-grey-100 rounded-full flex items-center gap-1 justify-center'>
                        <StarIcon color='primary'
                        fontSize='small'
                        /> 
                        <span className='text-neutral-500'><span className='text-black font-medium'>4.8</span> from 1,000+ founders</span>
                    </div>
                    </div>
        </>
    )
}

export default PowTagline;