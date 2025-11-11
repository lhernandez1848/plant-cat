"use client"

import {
  ColumnDef
} from '@tanstack/react-table'

type Diseases = {
  id: number;
  common_name: string;
  scientific_name: string;
  host: [string];
  images: [{ thumbnail?: string }];
}

export const columns: ColumnDef<Diseases>[] = [
  {
    accessorKey: "images",
    header: "",
    enableSorting: false,
    cell: ({ row }) => (
      <div>
        <img src={row.original.images[0] ? row.original.images[0].thumbnail : '/assets/default-image.jpg'} className="w-[50px] object-cover" />
      </div>
    ),
  },
  {
    accessorKey: "scientific_name",
    header: "scientific name",
    enableSorting: false,
  },
  {
    accessorKey: "common_name",
    header: "common name",
    enableSorting: false,
  },
  {
    accessorKey: "host",
    header: "host",
    cell: ({ row }) => (
      <span>
        {row.original.host.join(", ")}
      </span>
    ),
    enableSorting: false,
  },
  {
    cell: ({ row }) => (
      <div>
        <a href={`/details/${row.original.id}`} className="inline-flex font-medium items-center text-teal-600 hover:text-teal-800">
          Read More
        </a>
      </div>
    ),
    id: "link",
    enableSorting: false,
  }
]