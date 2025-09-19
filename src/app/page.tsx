
export default function Home() {
  return (
    <div className="max-w-full px-4 py-6 sm:px-6 lg:px-8">
      <section className="">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-6 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"><span className="text-teal-800">Grow your</span> plant passion</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-12 md:text-lg lg:text-xl dark:text-gray-400">Easily organize your plants, and discover care tips tailored to each one. Start building your green sanctuary—one leaf at a time.</p>
            <a href="/species" className="inline-flex items-center justify-center px-8 py-3 mr-6 text-base font-medium text-center text-white border border-teal-800 rounded-lg bg-teal-800 hover:bg-teal-900 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Explore
            </a>
            <a href="/care" className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-center text-teal-800 bg-teal-100 hover:bg-teal-300 rounded-lg focus:ring-4 focus:ring-gray-100 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Care Tips
            </a> 
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://plus.unsplash.com/premium_photo-1665408511329-9532b535ebb4?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="A variety of plants on a shelf" />
          </div>                
        </div>
      </section>
    </div>
  );
}
