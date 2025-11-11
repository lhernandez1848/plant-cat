"use client"

import {
  ColumnDef
} from '@tanstack/react-table'

type Species = {
  id: number;
  common_name: string;
  scientific_name: string;
  family: string;
  default_image?: { thumbnail?: string };
}

export const columns: ColumnDef<Species>[] = [
  {
    accessorKey: "default_image",
    header: "",
    cell: ({ row }) => (
      <div>
        <img src={row.original.default_image ? row.original.default_image.thumbnail : '/assets/default-image.jpg'} className="w-[48px] object-cover" />
      </div>
    ),
  },
  {
    accessorKey: "scientific_name",
    header: "scientific name",
  },
  {
    accessorKey: "common_name",
    header: "common name",
  },
  {
    accessorKey: "family",
    header: "family",
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
  }
]