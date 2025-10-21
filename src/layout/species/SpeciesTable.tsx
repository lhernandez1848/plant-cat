"use client"

import { useState, use } from "react"
import Table from "@/components/Table"
import { getSpecies } from "@/lib/api";
import { columns } from "@/app/species/columns";

export default function SpeciesTable({ speciesPromise }: { speciesPromise: Promise<any> }) {
  const promise = use(speciesPromise);
  const [species, setSpecies] = useState({ data: promise.data, current_page: promise.current_page, last_page: promise.last_page });

  const handleCallback = async (page: number) => {
    const response = await getSpecies(page);
    setSpecies(data => ({ ...data, data: response.data, current_page: response.current_page, last_page: response.last_page }));
  }

  if (species.data.length === 0) return <div>Something went wrong. Unable to retrieve data</div>
  if(!species) return <div>No species found.</div>

  return (
    <Table data={species.data} columns={columns} pageNumber={species.current_page} lastPage={species.last_page} callback={(page) => handleCallback(page)} />
  );
}