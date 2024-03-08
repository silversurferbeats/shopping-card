import React, { useState } from 'react'
import { FaShoppingCart, FaAngleDown, FaAngleUp } from "react-icons/fa"
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Profile from './Profile'

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const { cart } = useSelector((state) => state);
  let [open, setOpen] = useState(false);

  let Links = [
    { name: "INICIO", link: "/" },
    // { name: "SHOPPING", link: "/home" },
    // { name: "ABOUT", link: "/" },
    // { name: "CONTACT", link: "/" },
  ];

  if (isAuthenticated) {
    Links.splice(1, 0, { name: "SHOPPING", link: "/home" });
  }

  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-10'>
      <div className='md:flex items-center justify-between bg-slate-300 py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
          <NavLink to="/">
            <img className='w-10' src="../logo.png" />
          </NavLink>
        </div>
        {/* Menu icon */}
        <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
          {
            open ?
              <FaAngleUp /> :
              <FaAngleDown />
          }
        </div>
        {/* linke items */}
        <ul className={`gap-5 md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-slate-300 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
          {
            Links.map((link) => (
              <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                <NavLink to={link.link}>
                  <p className='text-gray-800 hover:text-blue-400 duration-500'>
                    {link.name}
                  </p>
                </NavLink>
              </li>))
          }
          {
            isAuthenticated && (
              <NavLink to="/cart">
                <div className='relative'>
                  <FaShoppingCart className='text-2xl hover:text-blue-400 duration-500' />
                  {
                    cart.length > 0 &&
                    <span className='absolute -top-1 -right-2 bg-sky-600 text-xs w-5 h-5 
               flex justify-center items-center animate-bounce rounded-full'>{cart.length}</span>
                  }
                </div>
              </NavLink>

            )
          }
          {
            isAuthenticated ?
              <button className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static' onClick={() => logout()} >Logout</button> :
              <button className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static' onClick={() => loginWithRedirect()} >Login</button>
          }
          <Profile />
        </ul>
      </div>
    </div>
  )
}

export default Navbar