import Card from "@/components/Card";
import Loading from "@/components/Loading";
import { getSearchResults } from "@/lib/api";
import { Suspense } from "react";

export default async function Page({params}: {params: {slug: string}}) {
  params = await params;
  const searchResponse = await getSearchResults(params.slug);

  return (
    <main className="min-h-full grid max-w-screen px-4 py-10 md:px-20 lg:px-40 lg:gap-8 xl:gap-0 lg:py-16 grow">
      <header>
        <h3 className="text-4xl md:text-5xl mb-10 text-gray-900 title-font">Search Results for "{params.slug}"</h3>
      </header>      
      {searchResponse.length === 0 
        ?
        <section className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <h5 className="mb-2 text-3xl font-bold text-gray-900">Sorry, we couldn't find any results for: "{params.slug}"</h5>
          <p className="mb-5 text-base text-gray-500 sm:text-lg">Please try your search again.</p>
        </section>
        : <section className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Suspense fallback={<Loading />}>
              {searchResponse.map((plant: { id: number; common_name: string; scientific_name: [string]; default_image?: { original_url?: string} }) => (
                <Card key={plant.id} id={plant.id} common_name={plant.common_name} scientific_name={plant.scientific_name} image_url={plant.default_image?.original_url} /> 
              ))}
            </Suspense>
          </section> 
      }             
    </main>
  )
}