import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
// import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  let [open, setOpen] = useState(false);

  let Links = [
    { name: "HOME", link: "/" },
    { name: "SHOPPING", link: "/home" },
    // { name: "ABOUT", link: "/" },
    // { name: "CONTACT", link: "/" },
  ];

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-slate-300 py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
          <NavLink to="/">
            <img className='w-10' src="../logo.png" />
          </NavLink>
        </div>
        {/* Menu icon */}
        <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
          {/* {
             open ? 
             <XMarkIcon/> : 
             <Bars3BottomRightIcon />
         } */}
          icon
        </div>
        {/* linke items */}
        <ul className={`gap-5 md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-slate-300 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
          {
            Links.map((link, index) => (
              <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                <a key={index} href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
              </li>))
          }

          <NavLink to="/cart">
            <div className='relative'>
              <FaShoppingCart className='text-2xl' />
              {
                cart.length > 0 &&
                <span className='absolute -top-1 -right-2 bg-sky-600 text-xs w-5 h-5 
               flex justify-center items-center animate-bounce rounded-full'>{cart.length}</span>
              }
            </div>
          </NavLink>

          <button className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Login</button>
        </ul>
      </div>
    </div>
  )
}

export default Navbar