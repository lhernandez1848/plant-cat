import Card from "@/components/Card";

export default async function Page({params}: {params: {slug: string}}) {
  params = await params;
  const data = await fetch(`${process.env.API_BASE_URL}/api/v2/species-list?key=${process.env.API_KEY}&q=${params.slug}`);
  const response = await data.json();
  const searchResponse = response.data;

  if(searchResponse.length === 0) {
    return (
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 mx-auto">
        <div className="w-full mt-5 p-4 text-center bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 bg-teal-100">
          <h5 className="mb-2 text-3xl font-bold text-gray-900">Sorry, we couldn't find any results for: "{params.slug}"</h5>
          <p className="mb-5 text-base text-gray-500 sm:text-lg">Please try your search again.</p>
        </div>
      </div>
    )
  } else if (!searchResponse) {
    return (
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 mx-auto">
        <div className="w-full mt-5 p-4 text-center bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 bg-teal-100">
          <h5 className="mb-2 text-xl font-semibold text-gray-900">Loading...</h5>
        </div>
      </div>
    )
  } else {
    return (
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 mx-auto">
        <h3 className="text-4xl mb-6 text-teal-800">Search Results for "{params.slug}"</h3>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {searchResponse.map((plant: { id: number; common_name: string; scientific_name: [string]; other_name: [string]; family: string; genus: string; default_image?: { medium_url: string} }) => (
            <Card key={plant.id} id={plant.id} common_name={plant.common_name} scientific_name={plant.scientific_name} other_name={plant.other_name} family={plant.family} genus={plant.genus} image_url={plant.default_image?.medium_url} />
          ))}
        </div>        
      </div>
    )
  } 
}