import React from 'react'
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table'
import { BsChevronBarDown, BsChevronBarUp, BsChevronBarExpand } from 'react-icons/bs'

import PaginationShowEntries from '../PaginationShowEntries/PaginationShowEntries'
import PaginationNumbreEntries from '../PaginationNumbreEntries/PaginationNumbreEntries'
import PaginationShowPage from '../PaginationShowPage/PaginationShowPage'
import Search from '../Search/Search'

//import { employeesData } from '../../datas/employeesData'

import '../Table/Table.css'

/**
 * Component React that define the table of employees datas
 * @returns The employees datas table
 */

const TableEmployees = ({employees}) => {

    const columns = React.useMemo(() =>[
        { Header: 'First Name', accessor: 'firstName' },
        { Header: 'Last Name', accessor: 'lastName' },
        { Header: 'Start Date', accessor: 'startDate' },
        { Header: 'Department', accessor: 'departement' },
        { Header: 'Date of Birth', accessor: 'birthDate' },
        { Header: 'Street', accessor: 'street' },
        { Header: 'City', accessor: 'city' },
        { Header: 'State', accessor: 'state' },
        { Header: 'Zip Code', accessor: 'zipCode' },
    ], [] )

    // Mock 
    //const data = React.useMemo(() => employeesData, []
    //)  
    // console.table(employees)
    // console.table(employeesData)

    const data = React.useMemo(() => employees, [employees]
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
    
    console.log('page:' + page.length)

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
                                    <div>
                                        {// Render the header
                                        column.render('Header')}
                                    </div>
                                    {/* Add a sort direction indicator */}
                                    <span className='iconArrow'>                                        
                                        {column.isSorted
                                        ? column.isSortedDesc
                                            ? <BsChevronBarDown/>
                                            : <BsChevronBarUp/>
                                        : <BsChevronBarExpand/>}
                                    </span>
                                </th>
                            ))}
                            </tr>
                        ))}
                    </thead>

                    {/* Apply the table body props */}
                        
                    <tbody className='dataBody' {...getTableBodyProps()}>  
                                            
                        {page.length === 0 && 
                            <tr>
                                <td colSpan={9} className='noDataText'>No data available in table</td>
                            </tr>}       

                        {page.length > 0 && page.map(                             // Loop over the table rows
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