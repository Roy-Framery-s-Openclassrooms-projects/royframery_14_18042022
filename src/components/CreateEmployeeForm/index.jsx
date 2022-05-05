import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useDispatch } from 'react-redux'
// modal Package
import { Modal } from '@royframery_openclassrooms/modal'
import '@royframery_openclassrooms/modal/dist/index.css'
// actions
import { createEmployee } from '../../features/employee'
// Components
import Select from '../Select'
// Selects options
import { states, departments } from '../../utils/optionsSelect'
// CSS
import './CreateEmployeeForm.scss'

/**
 * @description Component that show the create employee form
 * @returns { HTMLElement }
 */
const CreateEmployeeForm = () => {
    const [startDate, setStartDate] = useState()
    const [birthDate, setBirthDate] = useState()
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()

    /**
     * @description Function to open the modal
     */
    const openModal = () => {
        setIsOpen(true)
    }

    /**
     * @description Function to reset "isOpen" after close the modal
     */
    const afterCloseModal = () => {
        setIsOpen(false)
    }

    /**
     * @description Function that save the created employee in the state
     */
    const saveEmployee = (e) => {
        e.preventDefault()
        const firstName = document.querySelector('.firstName')
        const lastName = document.querySelector('.lastName')
        const birthDate = document.querySelector('.birthDate')
        const street = document.querySelector('.street')
        const city = document.querySelector('.city')
        const state = document.querySelector('.state')
        const zipCode = document.querySelector('.zipCode')
        const startDate = document.querySelector('.startDate')
        const department = document.querySelector('.department')

        const newEmployee = {
            firstName: firstName.value,
            lastName: lastName.value,
            dateOfBirth: birthDate.value,
            startDate: startDate.value,
            department: department.value,
            street: street.value,
            city: city.value,
            state: state.value,
            zipCode: zipCode.value,
        }
        dispatch(createEmployee(newEmployee))

        openModal()
    }

    /**
     * @description Function that reset date picker
     */
    const resetInputs = () => {
        setStartDate('')
        setBirthDate('')
    }

    return (
        <div>
            <form action="" className="form">
                <fieldset className="form__identity">
                    <legend>Identity informations</legend>
                    <label htmlFor="first-name" className="sr-only">
                        First Name
                    </label>
                    <input
                        type="text"
                        className="firstName"
                        id="first-name"
                        placeholder="First Name"
                    />

                    <label htmlFor="last-name" className="sr-only">
                        Last Name
                    </label>
                    <input
                        type="text"
                        className="lastName"
                        id="last-name"
                        placeholder="Last Name"
                    />

                    <label htmlFor="date-of-birth" className="sr-only">
                        Date of Birth
                    </label>
                    <DatePicker
                        selected={birthDate}
                        placeholderText="Date of Birth"
                        className="birthDate"
                        onChange={(date) => setBirthDate(date)}
                    />
                </fieldset>
                <fieldset className="form__adress">
                    <legend>Address</legend>

                    <label htmlFor="street" className="sr-only">
                        Street
                    </label>
                    <input
                        id="street"
                        className="street"
                        type="text"
                        placeholder="Street"
                    />

                    <label htmlFor="city" className="sr-only">
                        City
                    </label>
                    <input
                        id="city"
                        className="city"
                        type="text"
                        placeholder="City"
                    />

                    <label htmlFor="state" className="sr-only">
                        State
                    </label>
                    <Select
                        label="States"
                        htmlFor="state"
                        defaultValue="Select a State..."
                        options={states}
                        className="state"
                        hideLabel={true}
                    />
                    <label htmlFor="zip-code" className="sr-only">
                        Zip Code
                    </label>
                    <input
                        id="zip-code"
                        className="zipCode"
                        type="number"
                        placeholder="Zip Code"
                    />
                </fieldset>
                <fieldset className="form__status">
                    <legend>Employee informations</legend>
                    <div className="form__group">
                        <label htmlFor="start-date" className="sr-only">
                            Start Date
                        </label>
                        <DatePicker
                            selected={startDate}
                            placeholderText="Start Date"
                            onChange={(date) => setStartDate(date)}
                            className="startDate"
                        />
                    </div>
                    <Select
                        label="Departments"
                        htmlFor="departments"
                        defaultValue="Select a department..."
                        options={departments}
                        className="department"
                        hideLabel={true}
                    />
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
                        type="reset"
                        onClick={resetInputs}
                    >
                        Reset
                    </button>
                </div>
            </form>
            <Modal
                content="Employee Created ! 🚀"
                isOpen={isOpen}
                afterCloseModal={afterCloseModal}
            />
        </div>
    )
}

export default CreateEmployeeForm
