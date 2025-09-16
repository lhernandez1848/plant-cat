'use client'

import Link from 'next/link'
import Image from "next/image"
import { usePathname } from 'next/navigation'
import { useState } from 'react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false)
  const navigation = [
    { name: 'Home', href: '/', current: pathname === "/" ? true : false },
    { name: 'Species', href: '/species', current: pathname === "/species" ? true : false },
    { name: 'Plant Care', href: '/care', current: pathname === "/care" ? true : false }
  ]

  const navMenu = navigation.map((item) => (
    <li key={item.name}>
      <Link
      href={item.href}
      aria-current={item.current ? 'page' : undefined}
      className={classNames(
        item.current ? 'text-white bg-cyan-800 md:bg-transparent md:text-cyan-800 md:p-0 md:dark:text-cyan-500' : 'hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-800 md:p-0 md:dark:hover:text-cyan-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700', 'text-gray-900 rounded-sm',
      )}>{item.name}</Link>
    </li>
  ))

  return <nav className="bg-white dark:bg-gray-950 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image className="h-8 dark:invert"
            src="/assets/logo.svg"
            alt="Plant Cat logo"
            width={180}
            height={38}
            priority />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Plant Cat</span>
        </Link>
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button type="button" onClick={() => setIsOpen(!isOpen)} className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-200 focus:outline-hidden dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" aria-controls="mobile-menu" aria-expanded="false">
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {isOpen 
                ? <svg className="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                : <svg className="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
              }              
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">            
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                  {navMenu}
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Toggle isDark={isDark} handleChange={handleChange} />
          </div> */}
        </div>
      </div>
      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {isOpen &&
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <ul className="flex flex-col p-2 font-medium border border-gray-100 rounded-lg bg-gray-50 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navMenu}
            </ul>
          </div>
        </div>
      }      
    </nav>
}