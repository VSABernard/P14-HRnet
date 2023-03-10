import React from 'react'
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table'

import PaginationShowEntries from '../PaginationShowEntries/PaginationShowEntries'
import Search from '../Search/Search'


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
        { Header: 'State', accessor: 'state' },
        { Header: 'Zip Code', accessor: 'zipCode' },
    ], [] )

    const data = React.useMemo(() => [
        {
          id: 1,
          firstName: 'Bob',
          lastName: 'Eponge',
          startDate: '03/09/2023',
          department: 'Human Resources',
          dateOfBirth: '03/06/2000',
          street: 'Rainbow street',
          city: 'San Francisco',
          state: 'California',
          abbreviation: 'CA',
          zipCode: '12345'
        },
        {
          id: 2,
          firstName: 'Mickey',
          lastName: 'Mouse',
          startDate: '02/24/2021',
          department: 'Sales',
          dateOfBirth: '11/16/1988',
          street: 'Disneyland',
          city: 'Orlando',
          state: 'Florida',
          abbreviation: 'FL',
          zipCode: '67891'
        },
        {
          id: 3,
          firstName: 'Peter',
          lastName: 'Pan',
          startDate: '12/01/2022',
          department: 'Marketing',
          dateOfBirth: '08/19/1997',
          street: 'Neverland',
          city: 'Honolulu',
          state: 'Hawaii',
          abbreviation: 'HI',
          zipCode: '54321'
        }
      ], []
    )

    const tableInstance = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination )
    
    const {
        getTableProps,
        getTableBodyProps,
        preGlobalFilteredRows,
        state,
        setGlobalFilter,
        headerGroups,
        rows,
        prepareRow,
        setPageSize,
      } = tableInstance

    // We don't want to render all 2000 rows, 
    // so cap it at 20 for this use case
    const firstPageRows = rows.slice(0, 20)

    return (
        <div className='tableEmployeesSection'>
            <div className='tableEmployees'>
                <div className='searchLine'>
                    <PaginationShowEntries setPageSize={setPageSize}/>
                    <Search
                        preGlobalFilteredRows={preGlobalFilteredRows}
                        globalFilter={state.globalFilter}
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
                            {firstPageRows.map(                             // Loop over the table rows
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
            </div>
        </div>
    )    
}

export default TableEmployees