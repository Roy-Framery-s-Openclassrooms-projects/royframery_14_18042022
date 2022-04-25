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

Select.defaultProps = {
    hideLabel: true,
}

export default Select
