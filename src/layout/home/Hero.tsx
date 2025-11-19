export default function Hero() {
  return (
    <section className="">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-6 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl"><span className="text-teal-800">Grow your</span> plant passion</h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-12 md:text-lg lg:text-xl">Easily organize your plants, and discover care tips tailored to each one. Start building your green sanctuary—one leaf at a time.</p>
          <a href="/species" className="inline-flex items-center justify-center px-8 py-3 mr-6 text-base font-medium text-center text-white border border-teal-800 rounded-lg bg-teal-800 hover:bg-teal-900 focus:ring-4 focus:ring-primary-300">
            Explore
          </a>
          <a href="/diseases" className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-center text-teal-800 bg-teal-100 hover:bg-teal-300 rounded-lg focus:ring-4 focus:ring-gray-100">
            Diseases
          </a> 
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="/assets/hero-image.png" alt="A variety of plants on a shelf" />
        </div>                
      </div>
    </section>
  )
}