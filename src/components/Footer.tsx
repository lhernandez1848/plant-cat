import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-teal-100 border-t border-teal-200 max-w-screen">
      <div className="w-full p-4 md:py-8 md:px-40">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/home" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <Image className="h-8 dark:invert"
              src="/assets/logo.png"
              alt="Plant Cat logo"
              width={38}
              height={38}
              priority />
            <span className="text-heading self-center text-2xl font-semibold whitespace-nowrap text-teal-900 logo-font">Plant Cat</span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-body sm:mb-0">
            <li>
              <a href="/home" className="text-gray-600 hover:text-teal-700 me-4 md:me-6">Home</a>
            </li>
            <li>
              <a href="/species" className="text-gray-600 hover:text-teal-700 me-4 md:me-6">Species</a>
            </li>
            <li>
              <a href="/diseases" className="text-gray-600 hover:text-teal-700 me-4 md:me-6">Diseases</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-default border-teal-400 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-body sm:text-center text-gray-800">© {new Date().getFullYear()} Plant Cat. All rights reserved.</span>
      </div>
    </footer>
  );
}