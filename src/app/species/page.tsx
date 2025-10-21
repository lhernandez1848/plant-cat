import SpeciesTable from "@/layout/species/SpeciesTable";
import { getSpecies } from "@/lib/api";
import { Suspense } from "react";

export default function Species() {
  const speciesPromise = getSpecies();

  return (
    <section className="max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 mx-auto">
      <h1 className="text-4xl mb-6">Species List</h1>
      <Suspense fallback={<div>Loading species table...</div>}>
        <SpeciesTable speciesPromise={speciesPromise} />
      </Suspense>
    </section>
  );
}