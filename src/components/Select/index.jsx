import PropTypes from 'prop-types'

/**
 * @description Component that show an input select
 * @returns { HTMLElement }
 */
const Select = ({
    label,
    htmlFor,
    defaultValue,
    options,
    hideLabel,
    className,
}) => {
    return (
        <div className="select">
            <label htmlFor={htmlFor} className={hideLabel ? 'sr-only' : ''}>
                {label}
            </label>
            <select name={htmlFor} id={htmlFor} className={className}>
                <option value="">{defaultValue}</option>
                {options.map((option) => {
                    return (
                        <option
                            value={option.value ? option.value : option.option}
                            key={option.option}
                        >
                            {option.option}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

Select.propTypes = {
    label: PropTypes.string,
    htmlFor: PropTypes.string,
    defaultValue: PropTypes.string,
    options: PropTypes.array,
    hideLabel: PropTypes.bool,
    className: PropTypes.string,
}

export default Select
