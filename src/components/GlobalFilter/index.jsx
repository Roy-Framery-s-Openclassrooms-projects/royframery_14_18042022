import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'
import PropTypes from 'prop-types'
// CSS
import './GlobalFilter.scss'

/**
 * @description Component that show a input search for the employees table
 * @returns { HTMLElement }
 */
const GlobalFilter = ({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}) => {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = useState(globalFilter)
    const onChange = useAsyncDebounce((value) => {
        setGlobalFilter(value || undefined)
    }, 300)

    return (
        <div className="filter">
            <h2 className="filter__title">Search :</h2>
            <input
                className="filter__input"
                type="text"
                name="search"
                id="search"
                value={value || ''}
                onChange={(event) => {
                    setValue(event.target.value)
                    onChange(event.target.value)
                }}
                placeholder={`${count} employees ...`}
            />
        </div>
    )
}

GlobalFilter.propTypes = {
    preGlobalFilteredRows: PropTypes.array,
    globalFilter: PropTypes.string,
    setGlobalFilter: PropTypes.func,
}

export default GlobalFilter
