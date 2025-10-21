import { filterClassNames } from '@/lib/utilities';
import Form from 'next/form'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react';

export default function Search() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<any>(null);
  
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref])

  const handleSubmit = (formData: FormData) => {
    let query = formData.get('search');
    if(!query || query.toString().trim() === '') return;
    router.push(`/search/${formData.get('search')}`);
  }

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Form action={handleSubmit} className="relative" ref={ref}>
      <div data-collapse-toggle="navbar-search" onClick={handleClick} className="sm:hidden text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 me-1">
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search</span>
      </div>
      <div className={filterClassNames(isOpen ? "absolute right-2 w-60 z-10 bg-teal-500 p-3" : "hidden", "sm:relative rounded-lg sm:block pr-3")}>
        <div className="hidden sm:flex absolute inset-y-0 start-0 items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
          <span className="sr-only">Search icon</span>
        </div>
        <input type="text" name='search' id="search-navbar" className="block w-full p-2 ps-4 sm:ps-8 text-sm text-gray-900 sm:border sm:border-teal-700 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
      </div>
    </Form>
  )
}