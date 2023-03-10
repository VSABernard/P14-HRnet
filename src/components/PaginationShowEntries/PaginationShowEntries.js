import React from 'react'

import '../PaginationShowEntries/PaginationShowEntries.css'

/**
 * Component React that defines the bar of page's entries
 * @param {setPageSize} function Set number of entries
 * @param {pageSize} Number Number of entries by page
 * @returns 
 */

function PaginationShowEntries({setPageSize, pageSize}) {
    return (
      <>      
        <div className="paginationShowEntries">
            <p>Show</p>
            <select
            className='pageNumber'
                value={pageSize}
                onChange={e => {
                setPageSize(Number(e.target.value))
                }}
            >
                {[10, 25, 50, 100].map(pageSize => (
                <option  key={pageSize} value={pageSize}>
                    {pageSize}
                </option>
                ))}
            </select>
            <p>entries</p>
        </div>
      </>
    )
  }

  export default PaginationShowEntries