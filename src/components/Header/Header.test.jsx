import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// Test
import { fireEvent, render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import { createMemoryHistory } from 'history'
import 'regenerator-runtime/runtime'
// store
import { Provider } from 'react-redux'
import store from '../../utils/store'
// Components
import Header from './'
// Pages
import CreateEmployee from '../../pages/CreateEmployee'
import EmployeesList from '../../pages/EmployeesList'
import Home from '../../pages/Home'

describe('When the Header component is render', () => {
    test('Then I can see the Header', () => {
        render(
            <Router>
                <Header />
            </Router>
        )
        const header = document.querySelector('.header')
        expect(header).not.toBeNull()
    })

    describe('When I click on the "create employee" link', () => {
        test('Then the create employee page should be render', () => {
            const history = createMemoryHistory(['/createEmployee'])
            render(
                <Provider store={store}>
                    <Router history={history}>
                        <Header />
                        <Routes>
                            <Route
                                path="/createEmployee"
                                element={<CreateEmployee />}
                            />
                        </Routes>
                    </Router>
                </Provider>
            )
            const createEmployeeLink = document.querySelector(
                "[href='/createEmployee']"
            )
            expect(createEmployeeLink).not.toBeNull()
            fireEvent.click(createEmployeeLink)
            const title = screen.getByText('Create employee')
            expect(title).toBeInTheDocument()
        })
    })

    describe('When I click on the "employees list" link', () => {
        test('Then the employees list page should be render', () => {
            const history = createMemoryHistory(['/employees'])
            render(
                <Provider store={store}>
                    <Router history={history}>
                        <Header />
                        <Routes>
                            <Route
                                path="/employees"
                                element={<EmployeesList />}
                            />
                        </Routes>
                    </Router>
                </Provider>
            )
            const employeesLink = document.querySelector("[href='/employees']")
            expect(employeesLink).not.toBeNull()
            fireEvent.click(employeesLink)
            const title = screen.getByText('Employees list')
            expect(title).toBeInTheDocument()
        })
    })
    describe('When I click on the logo or brand text link', () => {
        test('Then the home page should be render', () => {
            const history = createMemoryHistory(['/'])
            render(
                <Provider store={store}>
                    <Router history={history}>
                        <Header />
                        <Routes>
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </Router>
                </Provider>
            )
            const homeLink = document.querySelector("[href='/']")
            expect(homeLink).not.toBeNull()
            fireEvent.click(homeLink)
            const title = screen.getByText('Welcome to')
            expect(title).toBeInTheDocument()
        })
    })
})
