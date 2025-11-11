import Loading from "@/components/Loading";
import TableSpecies from "@/layout/species/tableSpecies";
import { getDiseases } from "@/lib/api";
import { Suspense } from "react";
import { columns } from "./columns";

export default function Diseases() {
  const diseasesPromise = getDiseases();
  
  return (
    <section className="max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 mx-auto">
      <h1 className="text-4xl mb-6">Diseases List</h1>
      <Suspense fallback={<Loading />}>
        <TableSpecies promiseType={diseasesPromise} columns={columns} />
      </Suspense>
    </section>
  );
}