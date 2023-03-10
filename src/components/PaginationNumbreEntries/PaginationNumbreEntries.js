import React from 'react'

import '../PaginationNumbreEntries/PaginationNumbreEntries.css'

function PaginationNumbreEntries({ preGlobalFilteredRows, postGlobalFilteredRows, pageIndex, pageSize }) {
  const start =  ( pageIndex  * pageSize ) + 1
  const end = ( postGlobalFilteredRows.length < start + pageSize ) ? postGlobalFilteredRows.length : start + pageSize
  
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