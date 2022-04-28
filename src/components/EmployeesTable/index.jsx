import { useSelector } from 'react-redux'
import {
    useTable,
    useSortBy,
    usePagination,
    useGlobalFilter,
} from 'react-table'
import { useMemo, useState } from 'react'
// // Selectors
import { selectEmployees } from '../../utils/selectors'
// mocked Employees
import { data100Employees } from '../../utils/mockedEmployees'
import GlobalFilter from '../GlobalFilter'
// CSS
import './EmployeesTable.scss'

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
    const [employeesState, setEmployeesData] = useState([])
    const isEmployees = employeesState.length === 0
    const isEven = (index) => index % 2 === 0

    const employeesData = useMemo(() => [...employeesState], [employeesState])

    const employeeColumns = useMemo(() => {
        if (employeesState.length > 0) {
            return Object.keys(employeesState[0]).map((key) => {
                return { Header: formatHeadName(key), accessor: key }
            })
        } else {
            return [
                {
                    Header: 'First Name',
                    accessor: 'firstName',
                },
                {
                    Header: 'Last Name',
                    accessor: 'lastName',
                },
                {
                    Header: 'Start Date',
                    accessor: 'startDate',
                },
                {
                    Header: 'Department',
                    accessor: 'departmen',
                },
                {
                    Header: 'Date of Birth',
                    accessor: 'dateOfBirth',
                },
                {
                    Header: 'Street',
                    accessor: 'street',
                },
                {
                    Header: 'City',
                    accessor: 'city',
                },
                {
                    Header: 'State',
                    accessor: 'state',
                },
                {
                    Header: 'Zip Code',
                    accessor: 'zipCode',
                },
            ]
        }
    }, [employeesState])

    const tableInstance = useTable(
        {
            columns: employeeColumns,
            data: employeesData,
        },
        // for search input
        useGlobalFilter,
        // for sort with columns
        useSortBy,
        // for pagination
        usePagination
    )

    const {
        // for the table
        getTableProps,
        getTableBodyProps,
        headerGroups,
        // for the pagindation
        page, //using page instead of rows
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
        // for the input search
        preGlobalFilteredRows,
        setGlobalFilter,
        state,
    } = tableInstance

    console.log(page)
    return (
        <div className="table">
            <div className="dataChange">
                <button
                    onClick={() => {
                        setEmployeesData(data100Employees)
                    }}
                >
                    Use Mocked Data
                </button>
                <button
                    onClick={() => {
                        setEmployeesData(employees)
                    }}
                >
                    Use State Data
                </button>
            </div>
            <div className="table__header">
                <label className="table__header-select">
                    Show&nbsp;
                    <select
                        value={pageSize}
                        onChange={(e) => {
                            setPageSize(Number(e.target.value))
                        }}
                    >
                        {[10, 25, 50, 100].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                {pageSize}
                            </option>
                        ))}
                    </select>
                    &nbsp;entries
                </label>
                <GlobalFilter
                    preGlobalFilteredRows={preGlobalFilteredRows}
                    setGlobalFilter={setGlobalFilter}
                    globalFilter={state.globalFilter}
                />
            </div>
            <table className="table__table" {...getTableProps()}>
                <thead className="table__table-head">
                    {headerGroups.map((headerGroup) => {
                        return (
                            <tr
                                className="table__table-row"
                                {...headerGroup.getHeaderGroupProps()}
                            >
                                {headerGroup.headers.map((column) => {
                                    return (
                                        <th
                                            className="table__table-header"
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
                <tbody className="table__table-body" {...getTableBodyProps}>
                    {isEmployees ? (
                        <tr className="table__table-row">
                            <td
                                className="table__table-data noData"
                                colSpan="9"
                            >
                                No data available in table
                            </td>
                        </tr>
                    ) : (
                        page.map((row, idx) => {
                            prepareRow(row)
                            return (
                                <tr
                                    className={
                                        'table__table-row ' +
                                        (isEven(idx)
                                            ? 'table__table-row--green'
                                            : '')
                                    }
                                    {...row.getRowProps()}
                                >
                                    {row.cells.map((cell) => (
                                        <td
                                            className="table__table-data"
                                            {...cell.getCellProps()}
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    ))}
                                </tr>
                            )
                        })
                    )}
                </tbody>
            </table>
            <div className="table__footer">
                <div className="table__footer-entries">
                    <p {...getTableBodyProps}>
                        Showing
                        {page.length > 0
                            ? ' ' +
                              (page[0].index + 1) +
                              ' to ' +
                              (page[page.length - 1].index + 1) +
                              ' of ' +
                              employeesState.length +
                              ' '
                            : ' 0 to 0 of 0 '}
                        entries
                    </p>
                </div>
                <div className="table__footer-pagination">
                    <button
                        onClick={() => gotoPage(0)}
                        disabled={!canPreviousPage}
                    >
                        {'Begin'}
                    </button>
                    <button
                        onClick={() => previousPage()}
                        disabled={!canPreviousPage}
                    >
                        {'Previous'}
                    </button>
                    <button onClick={() => nextPage()} disabled={!canNextPage}>
                        {'Next'}
                    </button>
                    <button
                        onClick={() => gotoPage(pageCount - 1)}
                        disabled={!canNextPage}
                    >
                        {'End'}
                    </button>
                    <span>
                        <strong
                            className="table__footer-pagination-text"
                            {...getTableBodyProps}
                        >
                            {page.length === 0
                                ? ''
                                : 'Page ' +
                                  (pageIndex + 1) +
                                  ' of ' +
                                  pageOptions.length}
                        </strong>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default EmployeeTable
