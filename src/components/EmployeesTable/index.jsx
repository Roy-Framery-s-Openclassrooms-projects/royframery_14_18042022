import { useSelector } from 'react-redux'
import { useTable, useSortBy } from 'react-table'
import { useMemo } from 'react'
// // Selectors
import { selectEmployees } from '../../utils/selectors'
// mocked Employees
import { data100Employees } from '../../utils/mockedEmployees'

const capitalizeKey = (key) => {
    return key.charAt(0).toUpperCase() + key.slice(1)
}

const formatHeadName = (key) => {
    switch (key) {
        case 'firstName':
            return 'First Name'
        case 'lastName':
            return 'Last Name'
        case 'dateOfBirth':
            return 'Date of Birth'
        case 'zipCode':
            return 'Zip Code'
        case 'startDate':
            return 'Start Date'
        default:
            return capitalizeKey(key)
    }
}

const EmployeeTable = () => {
    const employees = useSelector(selectEmployees)
    const isEmployees = data100Employees.length === 0
    // const isEven = (index) => index % 2 === 0

    const employeesData = useMemo(() => [...data100Employees], [])

    const employeeColumns = useMemo(
        () =>
            Object.keys(data100Employees[0]).map((key) => {
                return { Header: formatHeadName(key), accessor: key }
            }),
        []
    )

    const tableInstance = useTable(
        {
            columns: employeeColumns,
            data: employeesData,
        },
        useSortBy
    )

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        tableInstance

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => {
                    return (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => {
                                return (
                                    <th
                                        {...column.getHeaderProps(
                                            column.getSortByToggleProps()
                                        )}
                                    >
                                        {column.render('Header')}
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' ▼'
                                                : ' ▲'
                                            : ''}
                                    </th>
                                )
                            })}
                        </tr>
                    )
                })}
            </thead>
            <tbody {...getTableBodyProps}>
                {isEmployees ? (
                    <tr>
                        <th>No data available in table</th>
                    </tr>
                ) : (
                    rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        )
                    })
                )}
            </tbody>
        </table>
    )
}

export default EmployeeTable
