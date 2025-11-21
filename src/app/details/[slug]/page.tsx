import CareGuide from "@/layout/details/care";
import TableDetails from "@/layout/details/tableDetails";
import { getSpeciesDetails } from "@/lib/api";
import { capitalizeEachWord } from "@/lib/utilities";
import { Suspense } from "react";

export default async function Page({params}: {params: {slug: number}}) {
  params = await params
  const responseData = await getSpeciesDetails(params.slug);
  let content;

  if (!responseData.ok) {
    content = <>
      <p className="text-red-500 text-center">Failed to load species details: {responseData.statusText}.</p>
      <p className="text-red-500 text-center">Please try again later.</p>
    </>
  } else {
    const response = await responseData.json();
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

    content = <>
      <header>
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-10 lg:mb-20 text-gray-900 text-center title-font">How to care for {capitalizeEachWord(response.common_name)}</h1>
      </header>
      <section className="w-full mb-8">
        <div className="text-left md:w-4/5 lg:w-3/4">
          <p className="text-[1.1rem] tracking-[.02em] text-gray-800 mb-4">{response.description}</p>
          <img src={response.default_image ? response.default_image.original_url : '/assets/default-image.jpg'} className="w-full md:w-5/6 lg:w-4/5 h-100 object-cover" /> 
          <TableDetails data={tableData} />
        </div>
      </section>
      <section className="w-full md:w-4/6">
        <Suspense>
          <CareGuide id={response.id} name={response.common_name} />
        </Suspense>
      </section>
    </>
  }
  return (
    <main className="grow max-w-screen flex flex-col items-center">
      <img src={"/assets/leaves-cropped.png"} alt="background leaves" className="w-full h-90 object-cover object-center opacity-30" />
      <article className="min-h-full max-w-full md:max-w-9/10 lg:max-w-3/4 grid px-4 md:px-12 py-10 lg:px-20 lg:gap-8 xl:gap-0 lg:py-16 -mt-70 md:-mt-50 bg-color-default relative">
        {content}
      </article>
    </main>
  )
}