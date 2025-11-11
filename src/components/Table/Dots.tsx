"use client"

import React, { useState } from "react";

function Dots({ currentPage, lastPage, gotoPage }: { currentPage: number, lastPage: number, gotoPage: (page: number) => void }) {
  const [showDots, setShowDots] = useState(true);

  return <>
    {showDots
      ? <div className="pagination-dots" onClick={() => setShowDots(false)}>...</div>
      : <input type="number"
          min="1"
          max={lastPage}
          defaultValue={currentPage}
          onChange={e => {
            const page = e.target.value ? Number(e.target.value) : 0
            gotoPage(page)
          }}
          className="border p-1 rounded w-16"/>
    }
  </>
}

export default Dots;