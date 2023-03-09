import React from 'react'
import { Link } from 'react-router-dom'
import { useTable, useSortBy } from 'react-table'

import HeaderApp from '../../components/Header/Header'
import Table from '../../components/Table/Table'

// import { data } from '../../datas/employeesData'

const CurrentEmployees = () => {

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
          departement: 'Human Resources',
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
          departement: 'Sales',
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
          departement: 'Marketing',
          dateOfBirth: '08/19/1997',
          street: 'Neverland',
          city: 'Honolulu',
          state: 'Hawaii',
          abbreviation: 'HI',
          zipCode: '54321'
        }
      ], []
    )

    const tableInstance = useTable({ columns, data }, useSortBy)
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = tableInstance

    return (
        <div className='currentEmployeesSection'>
            <HeaderApp/>
            <div className='tableEmployees'>
                <table {...getTableProps()}>
                    <thead>
                        {// Loop over the header rows
                        headerGroups.map(headerGroup => (
                            // Apply the header row props
                            <tr {...headerGroup.getHeaderGroupProps()}>
                            {// Loop over the headers in each row
                            headerGroup.headers.map(column => (
                                // Apply the header cell props
                                <th {...column.getHeaderProps()}>
                                {// Render the header
                                column.render('Header')}
                                </th>
                            ))}
                            </tr>
                        ))}
                    </thead>
                    
                    {/* Apply the table body props */}
                    <tbody {...getTableBodyProps()}>
                    {// Loop over the table rows
                        rows.map(row => {
                            // Prepare the row for display
                            prepareRow(row)
                            return (
                            // Apply the row props
                            <tr {...row.getRowProps()}>
                                {// Loop over the rows cells
                                row.cells.map(cell => {
                                // Apply the cell props
                                return (
                                    <td {...cell.getCellProps()}>
                                    {// Render the cell contents
                                    cell.render('Cell')}
                                    </td>
                                )
                                })}
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <Link className="homeLink" to='/'>
                Home
            </Link>
        </div>
    )
}

export default CurrentEmployees