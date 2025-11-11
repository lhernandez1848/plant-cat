'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { filterClassNames } from '@/lib/utilities'
import Search from '@/components/Search'

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false)
  const navigation = [
    { name: 'Home', href: '/', current: pathname === "/" ? true : false },
    { name: 'Species', href: '/species', current: pathname === "/species" ? true : false },
    { name: 'Diseases', href: '/diseases', current: pathname === "/diseases" ? true : false }
  ]

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navMenu = navigation.map((item) => (
    <li key={item.name}>
      <Link
      href={item.href}
      aria-current={item.current ? 'page' : undefined}
      className={filterClassNames(
        item.current ? 'text-teal-700 font-medium md:p-0' : 'text-gray-500 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-600 md:p-0', 'rounded-sm',
      )}>{item.name}</Link>
    </li>
  ))

  return <nav className="bg-white sticky w-full z-2 border-b border-teal-700">
      <div className="flex flex-wrap items-center justify-between w-full py-4 px-4 sm:px-20">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-4xl text-teal-800 font-semibold whitespace-nowrap title-font">Plant Cat</span>
        </Link>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
          <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search..." />
          </div>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            {navMenu}
          </ul>
        </div>
        <div className="flex md:order-2">
          <Search />
          <button type="button" onClick={() => setIsOpen(!isOpen)} className="relative md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-200 focus:outline-hidden" aria-controls="mobile-menu" aria-expanded="false">
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Open main menu</span>
            {isOpen 
              ? <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              : <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            }              
          </button>
        </div>
      </div>
      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {isOpen &&
        <div className="md:hidden absolute right-1 ps-4 pe-10 border border-gray-100 rounded-lg bg-gray-50 md:bg-white" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <ul className="flex flex-col p-2 font-medium">
              {navMenu}
            </ul>
          </div>
        </div>
      }      
    </nav>
}