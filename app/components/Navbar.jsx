"use client";
import React, { useState }from 'react';
import Link from 'next/link';
import NavLink from './NavLink.jsx';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import MenuOverlay from './MenuOverlay.jsx';

const navLinks = [{
    title: "About",
    path: "#about",
},
{
    title: "Projects",
    path: "#projects",
}
,
{
    title: "Contact",
    path: "#contact",
}
]

const Navbar = () => {
 
    const [navbarOpen,setNavbarOpen] = useState(false);

  return (
            <nav className='fixed border border-[#33353F] top-0 left-0 right-0 z-100 bg-[#121212] bg-opacity-100'>
                <div className='z-100 flex lg:py-4  flex-wrap items-center justify-between mx-auto py-3 px-4 '>
                    <Link href={"/"} className='z-100 text-2xl md:text-4xl text-white font-semi-bold'>
                    PORTFOLIO
                    </Link>
                    <div className='z-100 mobile-menu block md:hidden'>
                       {
                        navbarOpen ? (
                            <button 
                            onClick={()=>setNavbarOpen(false)}
                            className='hover:text-white hover:border-white flex items-center px-3 py-2 border rounded border-slate-200  text-slate-200'>
                                <XMarkIcon className='h-5 w-5'/>
                            </button>
                        )
                        :(
                            <button 
                             onClick={()=>setNavbarOpen(true)}
                            className='hover:text-white hover:border-white flex items-center px-3 py-2 border rounded border-slate-200  text-slate-200'>
                                <Bars3Icon className='h-5 w-5'/>
                            </button>
                        )
                       }
                    </div>
                    <div className='menu hidden md:block md:w-auto' id='navbar'>
                        <ul className='flex p-4 md:flex-row md:p-0 md:space-x-8 mt-0'>
                            {
                                navLinks.map((link,index)=>(
                                 <li key={index}>
                                  <NavLink href={link.path} title={link.title}/>
                        
                                 </li>
                                )

                                )
                            }
                        </ul>
                    </div>
                </div>
                {
                    navbarOpen? <MenuOverlay links={navLinks} />:null
                }
            </nav>
    )
}

export default Navbar