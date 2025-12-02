import React from 'react'

const Navbar = () => {
    const navItems = [
        {
            title: 'Founders',
            href:'#'
        },
        {
            title: 'Guide',
            href:'#'
        },
        {
            title: 'Pricing',
            href:'#'
        },
        {
            title: 'Log In',
            href:'#'
        },
    ]
  return (
    <>
    <div className='flex justify-between items-center pt-1 '>
        <div>
            <img src='src/assets/finta-logo-light.svg' className='size-16'/>
        </div>
        <div className='flex gap-6 items-center '>
        {navItems.map((item, index) => (
            <a key={index} href={item.href} className='text-gray-600 hover:text-gray-700 transition-colors duration-300'>{item.title}</a>
        )
        )}
        <button className='text-white hover:text-purple-200 transition-all bg-blue-400 p-2 border-0 rounded-xl shadow-[5px_5px_0px_0px_rgba(109,40,217)] '>Get started</button>
        </div>
        
    </div>
    </>
  )
}

export default Navbar