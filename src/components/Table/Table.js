import React from 'react'
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table'

import PaginationShowEntries from '../PaginationShowEntries/PaginationShowEntries'
import PaginationNumbreEntries from '../PaginationNumbreEntries/PaginationNumbreEntries'
import PaginationShowPage from '../PaginationShowPage/PaginationShowPage'
import Search from '../Search/Search'

import { employeesData } from '../../datas/employeesData'

import '../Table/Table.css'

/**
 * Component React that define the table of employees datas
 * @returns the employees datas table
 */

const TableEmployees = () => {

    const columns = React.useMemo(() =>[
        { Header: 'First Name', accessor: 'firstName' },
        { Header: 'Last Name', accessor: 'lastName' },
        { Header: 'Start Date', accessor: 'startDate' },
        { Header: 'Department', accessor: 'department' },
        { Header: 'Date of Birth', accessor: 'dateOfBirth' },
        { Header: 'Street', accessor: 'street' },
        { Header: 'City', accessor: 'city' },
        { Header: 'State', accessor: 'abbreviation' },
        { Header: 'Zip Code', accessor: 'zipCode' },
    ], [] )

    const data = React.useMemo(() => employeesData, []
    )

    const tableInstance = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination )
    
    const {
        getTableProps,
        getTableBodyProps,
        preGlobalFilteredRows,
        state: { pageIndex, pageSize, globalFilter },
        setGlobalFilter,
        headerGroups,
        rows,
        prepareRow,
        setPageSize,
        canPreviousPage, 
        canNextPage, 
        nextPage, 
        previousPage, 
        page
      } = tableInstance

    // We don't want to render all 2000 rows, 
    // so cap it at 20 for this use case
    //const firstPageRows = rows.slice(0, 10)

    return (
        <div className='tableEmployeesSection'>
            <div className='tableEmployees'>
                <div className='searchLine'>
                    <PaginationShowEntries setPageSize={setPageSize} pageSize={pageSize}/>
                    <Search
                        preGlobalFilteredRows={preGlobalFilteredRows}
                        globalFilter={globalFilter}
                        setGlobalFilter={setGlobalFilter} />
                </div>                

                <table className='tableSection' {...getTableProps()}>
                    <thead className='dataHeader'>
                        {// Loop over the header rows
                        headerGroups.map(headerGroup => (
                            // Apply the header row props
                            <tr className='headerGroup' {...headerGroup.getHeaderGroupProps()}>

                            {// Loop over the headers in each row
                            headerGroup.headers.map(column => (
                                
                                // Apply the header cell props
                                <th className='headerList' {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {// Render the header
                                    column.render('Header')}

                                    {/* Add a sort direction indicator */}
                                    <span className='iconArrow'>
                                        {column.isSorted
                                        ? column.isSortedDesc
                                            ? ' 🔽'
                                            : ' 🔼'
                                        : ''}
                                    </span>
                                </th>
                            ))}
                            </tr>
                        ))}
                    </thead>

                    {/* Apply the table body props */}
                    <tbody className='dataBody' {...getTableBodyProps()}>                        
                            {page.map(                             // Loop over the table rows
                                (row, i) => {
                                prepareRow(row)                             // Prepare the row for display            
                                return (
                                    // Apply the row props
                                    <tr className='dataGroup'{...row.getRowProps()}>                                        
                                        {row.cells.map(cell => {            // Loop over the rows cells
                                            // Apply the cell props
                                            return (
                                            <td className='dataList' {...cell.getCellProps()}>                                                
                                                {cell.render('Cell')}       
                                            </td>
                                            )
                                        })}
                                    </tr>
                                )}
                            )}
       
                    </tbody>
                </table>

                <div className='pageLine'>
                    <PaginationNumbreEntries preGlobalFilteredRows={preGlobalFilteredRows} postGlobalFilteredRows={rows} pageIndex={ pageIndex } pageSize={pageSize}/>
                    <PaginationShowPage canPreviousPage={ canPreviousPage } 
                            canNextPage={ canNextPage } nextPage={ nextPage } 
                            previousPage={ previousPage } pageIndex={ pageIndex }/>
                    
                </div>   
            </div>
        </div>
    )    
}

export default TableEmployees