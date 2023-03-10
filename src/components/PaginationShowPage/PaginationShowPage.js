import React from 'react'

import '../PaginationShowPage/PaginationShowPage.css'

function PaginationShowPage({ canPreviousPage, canNextPage, nextPage, previousPage, pageIndex }) {
  // Render the UI for the table
  return (
    <>
      <div className="paginationShowPage">        
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'Previous'}
        </button>{' '}
         <span>
          <strong>
            {pageIndex + 1}
          </strong>{' '}
        </span>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'Next'}
        </button>{' '}
      </div>
    </>
  )
}

export default PaginationShowPage