import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
// store
import { Provider } from 'react-redux'
import store from '../../utils/store'
// compnents
import CreateEmployeeForm from './'

describe('When the Header component is render ', () => {
    test('Then I can see the form', () => {
        render(
            <Provider store={store}>
                <CreateEmployeeForm />
            </Provider>
        )
        const form = document.querySelector('.form')
        expect(form).not.toBeNull()
    })

    describe('When I click on the submit button', () => {
        test('Then it should render the modal', () => {
            render(
                <Provider store={store}>
                    <CreateEmployeeForm />
                </Provider>
            )
            const submitButton = document.querySelector('.form__button-submit')
            expect(submitButton).not.toBeNull()
            fireEvent.click(submitButton)
            const modalText = screen.getByText('Employee Created ! 🚀')
            expect(modalText).toBeInTheDocument()
        })
    })

    describe('When I click on the reset button', () => {
        test('Then it should clear all inputs', () => {
            render(
                <Provider store={store}>
                    <CreateEmployeeForm />
                </Provider>
            )
            const inputData = {
                firstName: 'Tony',
                lastName: 'Stark',
                birthDate: '05/29/1970',
                street: '10880 Malibu Point',
                city: 'Malibu',
                state: 'CA',
                zipCode: '90265',
                startDate: '08/13/1995',
                department: 'Engineering',
            }

            const firstName = document.querySelector('.firstName')
            fireEvent.change(firstName, {
                target: { value: inputData.firstName },
            })
            expect(firstName.value).toBe(inputData.firstName)

            const lastName = document.querySelector('.lastName')
            fireEvent.change(lastName, {
                target: { value: inputData.lastName },
            })
            expect(lastName.value).toBe(inputData.lastName)

            const birthDate = document.querySelector('.birthDate')
            fireEvent.change(birthDate, {
                target: { value: inputData.birthDate },
            })
            expect(birthDate.value).toBe(inputData.birthDate)

            const street = document.querySelector('.street')
            fireEvent.change(street, {
                target: { value: inputData.street },
            })
            expect(street.value).toBe(inputData.street)

            const city = document.querySelector('.city')
            fireEvent.change(city, {
                target: { value: inputData.city },
            })
            expect(city.value).toBe(inputData.city)

            const state = document.querySelector('.state')
            fireEvent.change(state, {
                target: { value: inputData.state },
            })
            expect(state.value).toBe(inputData.state)

            const zipCode = document.querySelector('.zipCode')
            fireEvent.change(zipCode, {
                target: { value: inputData.zipCode },
            })
            expect(zipCode.value).toBe(inputData.zipCode)

            const startDate = document.querySelector('.startDate')
            fireEvent.change(startDate, {
                target: { value: inputData.startDate },
            })
            expect(startDate.value).toBe(inputData.startDate)

            const department = document.querySelector('.department')
            fireEvent.change(department, {
                target: { value: inputData.department },
            })
            expect(department.value).toBe(inputData.department)

            const resetButton = document.querySelector('.form__button-reset')
            expect(resetButton).not.toBeNull()
            fireEvent.click(resetButton)

            expect(firstName.value).toBe('')
            expect(lastName.value).toBe('')
            expect(startDate.value).toBe('')
            expect(zipCode.value).toBe('')
            expect(state.value).toBe('')
            expect(city.value).toBe('')
            expect(street.value).toBe('')
            expect(birthDate.value).toBe('')
            expect(department.value).toBe('')
        })
    })
})
