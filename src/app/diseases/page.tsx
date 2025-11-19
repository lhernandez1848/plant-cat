import Loading from "@/components/Loading";
import TableSpecies from "@/layout/species/tableSpecies";
import { getDiseases } from "@/lib/api";
import { Suspense } from "react";
import { columns } from "./columns";

export default function Diseases() {
  const diseasesPromise = getDiseases();
  
  return (
    <main className="min-h-screen max-h-fit grid max-w-screen-xl px-4 py-10 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
      <header>
        <h1 className="text-4xl md:text-6xl mb-10 text-gray-900 title-font">Diseases List</h1>
      </header>
      <Suspense fallback={<Loading />}>
        <TableSpecies promiseType={diseasesPromise} columns={columns} />
      </Suspense>
    </main>
  );
}