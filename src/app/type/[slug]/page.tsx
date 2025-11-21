import TypeList from "@/layout/type/typeList";
import { getPlantTypesByQuery } from "@/lib/api";
import { capitalizeEachWord } from "@/lib/utilities";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plant Type",
};

export default async function PlantType({
  params,
  searchParams
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { slug } = await params;
  const filters = (await searchParams);
  const promise = getPlantTypesByQuery(`${slug}=${filters.type}`);

  return (
    <main className="grow max-w-screen flex flex-col items-center">
      <img src={`/assets/${slug}.jpg`} alt="background leaves" className="w-full h-90 object-cover object-center opacity-70" />
      <div className="min-h-full max-w-full md:max-w-9/10 lg:max-w-3/4 grid px-4 md:px-12 py-10 lg:px-20 lg:gap-8 xl:gap-0 lg:py-16 -mt-70 md:-mt-50 bg-color-default relative">
        <header>
          <h1 className="text-center text-4xl md:text-6xl mb-10 text-gray-900 title-font">{capitalizeEachWord(filters.title)}</h1>
        </header>
        <TypeList promiseType={promise} params={`${slug}=${filters.type}`} />
      </div>      
    </main>
  )
}