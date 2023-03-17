import React from 'react'

import '../PaginationNumbreEntries/PaginationNumbreEntries.css'

/**
 * Component React which displays the number of entries' pagination in the current employees' table
 * @param {preGlobalFilteredRows} param0 
 * @param {postGlobalFilteredRows}
 * @param {pageIndex}
 * @param {pageSize}
 * @returns The number of entries' pagination in the current employees' table
 */

function PaginationNumbreEntries({ preGlobalFilteredRows, postGlobalFilteredRows, pageIndex, pageSize }) {
  const start =  postGlobalFilteredRows.length > 0 ? ( pageIndex  * pageSize ) + 1 : 0
  const end = ( postGlobalFilteredRows.length < start + pageSize - 1 ) ? postGlobalFilteredRows.length : start + pageSize - 1
  
  // Render the UI for the table
  return (
    <>
      <div className="paginationNumbreEntries">        
        Showing {start} to {end} of {postGlobalFilteredRows.length} entries  
        { postGlobalFilteredRows.length !== preGlobalFilteredRows.length  &&
         <p className='filteredFrom'>(filtered from {preGlobalFilteredRows.length} total entries)</p>
       }

        
      </div>
    </>
  )
}

export default PaginationNumbreEntries