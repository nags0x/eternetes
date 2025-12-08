import { setStyle } from 'motion';
import React, {useState} from 'react'

const Toggle = ({sendState}) => {
    const [toggle, setToggle] = useState(0);

    const handleToggle = (value) => {
    setToggle(value);
    sendState(value); 
  };

  return (
    <>
        <div className='grid grid-cols-2 bg-neutral-100 h-full border border-stone-200 rounded-lg justify-center items-center w-full mt-5'>
                <div 
                className='text-center text-gray-500 font-medium text-sm '
                onClick={() => handleToggle(0)}
                >
                    <div className={`
                        ${toggle === 0 ? "text-black m-0.5 p-0.75 bg-white border border-transparent shadow-xs" : "text-gray-500"} rounded-md`}>
                        Toggle
                    </div>
                </div>
                <div 
                className='text-center text-gray-500 font-medium text-sm'
                onClick={() => handleToggle(1)}
                >
                    <div className={`
                    ${toggle === 1 ? "text-black m-0.5 p-0.75 bg-white border border-transparent shadow-xs" : "text-gray-500"} rounded-md`}>
                            Accounting
                    </div>
                    
                </div>
        </div>
    </>
  )
}

export default Toggle;