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
    <main className="">
      <img src={`/assets/${slug}.jpg`} alt="background leaves" className="w-full h-90 object-cover object-center opacity-70" />
      <div className="px-4 py-10 mx-auto grid lg:gap-8 xl:gap-0 lg:py-16 max-w-screen-xl min-h-screen max-h-fit -mt-20 bg-color-default relative">
        <header>
          <h1 className="text-center text-4xl md:text-6xl mb-10 text-gray-900 title-font">{capitalizeEachWord(filters.title)}</h1>
        </header>
        <TypeList promiseType={promise} params={`${slug}=${filters.type}`} />
      </div>      
    </main>
  )
}