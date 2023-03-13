import React from 'react'

import '../PaginationShowPage/PaginationShowPage.css'

/**
 * Component of React which displays the 'previous' and 'next' button' in the current employees' table
 * @param {canPreviousPage} 
 * @param {canNextPage}
 * @param {nextPage}
 * @param {previousPage}
 * @param {pageIndex}
 * @returns 
 */

function PaginationShowPage({ canPreviousPage, canNextPage, nextPage, previousPage, pageIndex }) {
  // Render the UI for the table
  return (
    <>
      <div className="paginationShowPage">        
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'Previous'}
        </button>{' '}
        <span className='page'>
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