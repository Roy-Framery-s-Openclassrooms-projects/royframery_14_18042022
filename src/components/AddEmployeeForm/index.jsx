// CSS
import './AddEmployeeForm.scss'

const AddEmployeeForm = () => {
    const saveEmployee = (event) => {
        event.preventDefault()
        console.log('save employee')
    }
    const resetInputs = (event) => {
        event.preventDefault()
        console.log('reset input')
    }

    return (
        <form action="" className="form">
            <fieldset className="form__identity">
                <legend>Identity informations</legend>
                <label htmlFor="first-name" className="sr-only">
                    First Name
                </label>
                <input type="text" id="first-name" placeholder="First Name" />

                <label htmlFor="last-name" className="sr-only">
                    Last Name
                </label>
                <input type="text" id="last-name" placeholder="Last Name" />

                <label htmlFor="date-of-birth" className="sr-only">
                    Date of Birth
                </label>
                <input
                    id="date-of-birth"
                    type="text"
                    placeholder="Date of Birth"
                />
            </fieldset>
            <fieldset className="form__adress">
                <legend>Address</legend>

                <label htmlFor="street" className="sr-only">
                    Street
                </label>
                <input id="street" type="text" placeholder="Street" />

                <label htmlFor="city" className="sr-only">
                    City
                </label>
                <input id="city" type="text" placeholder="City" />

                <label htmlFor="state" className="sr-only">
                    State
                </label>
                <select name="state" id="state"></select>

                <label htmlFor="zip-code" className="sr-only">
                    Zip Code
                </label>
                <input id="zip-code" type="number" placeholder="Zip Code" />
            </fieldset>
            <fieldset className="form__status">
                <legend>Employee informations</legend>
                <label htmlFor="start-date" className="sr-only">
                    Start Date
                </label>
                <input id="start-date" type="text" placeholder="Start Date" />

                <label htmlFor="department" className="sr-only">
                    Department
                </label>
                <select name="department" id="department">
                    <option value="">Select department...</option>
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
            </fieldset>
            <div className="form__buttons">
                <button
                    className="form__button form__button-submit"
                    onClick={saveEmployee}
                >
                    Save
                </button>
                <button
                    className="form__button form__button-reset"
                    onClick={resetInputs}
                >
                    Reset
                </button>
            </div>
        </form>
    )
}

export default AddEmployeeForm
