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

  if(!response) {
    return (
      <div className="w-full px-4 py-8 sm:px-50">
        <div className="w-full mt-5 p-4 text-center bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 bg-teal-100">
          <h5 className="mb-2 text-3xl font-bold text-gray-900">Sorry, we have no information on this plant</h5>
          <p className="mb-5 text-base text-gray-500 sm:text-lg">Please go back and try again.</p>
        </div>
      </div>
    )
  } else {
    return (
      <div className="w-full px-4 py-20 lg:px-50">
        <h3 className="text-4xl mb-10 text-center">How to care for {response.common_name}</h3>
        <section className="w-full mb-8">
          <div className="flex flex-col gap-8 w-full">
            <img src={response.default_image ? response.default_image.regular_url : '/assets/default-image.jpg'} className="w-2/5 h-auto object-cover rounded-lg" />
            <div className="text-left w-4/6 text-[1.05rem] text-gray-700">
              <p>{response.description}</p>
              <TableDetails data={tableData} />
            </div>            
          </div>
        </section>
        <section className="w-full md:w-4/6">
          <Suspense>
            <CareGuide id={response.id} />
          </Suspense>
        </section>
      </div>
    )
  } 
}