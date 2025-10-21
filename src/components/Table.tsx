'use client';

import {
  ColumnDef,
  PaginationState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useState } from 'react';

interface TableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  pageNumber: number
  lastPage: number
  callback: (page: number) => void
}

export default function MyTable<TData, TValue>({
  columns,
  data,
  pageNumber,
  lastPage,
  callback
}: TableProps<TData, TValue>) {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 30,
  })

  const table = useReactTable({
    columns,
    data,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  })

  return (
    <div className="">
      <div className="" />
      <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-teal-100'>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <th key={header.id} colSpan={header.colSpan} className='px-6 py-3'>
                    <div
                      {...{
                        className: header.column.getCanSort()
                          ? 'cursor-pointer select-none'
                          : '',
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </div>
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => {
            return (
              <tr key={row.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200'>
                {row.getVisibleCells().map(cell => {
                  return (
                    <td key={cell.id} className='px-6 py-4'>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="h-2" />
       <div className="flex items-center -space-x-px h-8 text-sm">
        <button className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
          onClick={() => callback(1)}
          disabled={pageNumber === 1}
        >
          {'<<'}
        </button>
        <button
          className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
          onClick={() => callback(pageNumber - 1)}
          disabled={pageNumber === 1}
        >
          <span className="sr-only">Previous</span>
          <svg className="w-2.5 h-2.5 rtl:rotate-180" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
          </svg>
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {pageNumber} of{' '}
            {lastPage}
          </strong>
        </span>
        <button
          className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
          onClick={() => callback(pageNumber + 1)}
          disabled={pageNumber === lastPage}
        >
          <span className="sr-only">Next</span>
          <svg className="w-2.5 h-2.5 rtl:rotate-180" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
          </svg>
        </button>
        <button
          className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
          onClick={() => callback(lastPage)}
          disabled={pageNumber === lastPage}
        >
          {'>>'}
        </button>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            min="1"
            max={table.getPageCount()}
            defaultValue={pageNumber}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              callback(page + 1)
            }}
            className="border p-1 rounded w-16"
          />
        </span>
      </div>
    </div>
  );
}