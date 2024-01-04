import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import {FiMenu} from 'react-icons/fi'

function Navbar() {
    const navigation = [
        { title: "Home", href: "/"},
        { title: "Sobre", href: "/about"},
        { title: "Mapa de calor", href: "/heatmap"},
        { title: "Login", href: "/login"},
    ]
  return (
    <nav className='stricky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
        <div className='max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-0 h-full'>
            <Logo title='Vector Tracking System' className='text-black'/>
            <div className='hidden md:inline-flex items-center gap-7 text-gray-900 hover:text-black duration-200'>
              {navigation.map((item) =>(
                <Link key={item?.title} href={item?.href} className='text-sm uppercase font-semibold relative group overflow-hidden'>
                  {item?.title}
                  <span className='w-full h-[1px] bg-blue-700 absolute inline-block left-0 botton-0 -translate-x-[100%] group-houver:translate-x-0 transition-transform duration-200'/>
                </Link>
              ))}
            </div>
            <div className='md:hidden'>
              <FiMenu className='text-2xl'/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar