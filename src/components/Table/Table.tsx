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
import { DOTS, useCustomPagination } from "./UseCustomPagination";
import Dots from "./Dots";
import "./table.css"
import { filterClassNames } from '@/lib/utilities';

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

  const paginationRange = useCustomPagination({
    totalPageCount: lastPage,
    currentPage: pageNumber
  });

  return (
    <div className="overflow-x-auto">
      <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-teal-100'>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <th key={header.id} colSpan={header.colSpan} className='px-4 py-3'>
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
              <tr key={row.id} className='bg-white border-b border-gray-200'>
                {row.getVisibleCells().map(cell => {
                  return (
                    <td key={cell.id} className='px-4 py-2 nth-last-2:w-[25%] last:w-[15%]'>
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
       <div className="flex items-center h-8 w-full text-sm justify-center gap-4">
        <div className="flex">
          <button className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
          onClick={() => callback(1)}
          disabled={pageNumber === 1}
          >
            {'<<'}
          </button>
          <button
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            onClick={() => callback(pageNumber - 1)}
            disabled={pageNumber === 1}
          >
            <span className="sr-only">Previous</span>
            <svg className="w-2.5 h-2.5 rtl:rotate-180" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
          </button>
        </div>        
        <div className="flex flex-row gap-2">
          {paginationRange?.map((item: any, index: number) => {
            if(item === DOTS) {
              return <Dots key={index} currentPage={pageNumber} lastPage={lastPage} gotoPage={(page) => callback(page)} />
            } else {
              return <button key={index} className={filterClassNames((pageNumber) === item ? "text-teal-800" : "text-gray-500","font-light cursor-pointer")} onClick={() => callback(item)}>{item}</button>
            }
          })}
          </div>
        <div className="flex">
          <button
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 border-e-0 hover:bg-gray-100 hover:text-gray-700"
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
        </div>
      </div>
    </div>
  );
}