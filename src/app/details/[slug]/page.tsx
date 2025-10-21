
export default async function Page({params}: {params: {slug: number}}) {
  params = await params;
  const data = await fetch(`${process.env.API_BASE_URL}/api/v2/species/details/${params.slug}?key=${process.env.API_KEY}`);
  const response = await data.json();

  if(!response) {
    return (
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 mx-auto">
        <div className="w-full mt-5 p-4 text-center bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 bg-teal-100">
          <h5 className="mb-2 text-3xl font-bold text-gray-900">Sorry, we have no information on this plant</h5>
          <p className="mb-5 text-base text-gray-500 sm:text-lg">Please go back and try again.</p>
        </div>
      </div>
    )
  } else {
    return (
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 mx-auto">
        <h3 className="text-4xl mb-6 ">{response.common_name}</h3>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          
        </div>        
      </div>
    )
  } 
}