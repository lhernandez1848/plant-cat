import CareGuide from "@/layout/details/care";
import TableDetails from "@/layout/details/tableDetails";
import { getSpeciesDetails } from "@/lib/api";
import { Suspense } from "react";

export default async function Page({params}: {params: {slug: number}}) {
  params = await params
  const response = await getSpeciesDetails(params.slug);
  
  const scientificName = response.scientific_name.length > 0 ? response.scientific_name.join(', ') : 'N/A';
  const sunlight = response.sunlight.length > 0 ? response.sunlight.join(', ') : 'N/A';
  const tableData = [
    { header: 'Scientific Name', detail: scientificName },
    { header: 'Family', detail: response.family || 'N/A' },
    { header: 'Type', detail: response.type || 'N/A' },
    { header: 'Cycle', detail: response.cycle || 'N/A' },
    { header: 'Sunlight', detail: sunlight },
    { header: 'Watering', detail: response.watering || 'N/A' },
    { header: 'Toxicity', detail: response.poisonous_to_pets || 'N/A' },
  ];

  return (
    <main className="min-h-screen max-h-fit grid max-w-screen-xl px-4 py-10 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
      <header>
        <h1 className="text-4xl md:text-6xl mb-10 text-gray-900 text-center title-font">How to care for {response.common_name}</h1>
      </header>
      <section className="w-full mb-8">
        <div className="flex flex-col gap-8 w-full">
          <img src={response.default_image ? response.default_image.regular_url : '/assets/default-image.jpg'} className="w-2/5 h-auto object-cover rounded-lg" />
          <div className="text-left w-4/6">
            <p className="text-[1.1rem] tracking-[.02em] text-gray-800">{response.description}</p>
            <TableDetails data={tableData} />
          </div>            
        </div>
      </section>
      <section className="w-full md:w-4/6">
        <Suspense>
          <CareGuide id={response.id} name={response.common_name} />
        </Suspense>
      </section>
    </main>
  )
}