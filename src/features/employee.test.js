import reducer, { createEmployee } from './employee'

test('Should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
        employees: [],
    })
})

test('Should handle a employee being added in an empty array', () => {
    const previousState = {
        employees: [],
    }
    const newEmploye = {
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
    expect(reducer(previousState, createEmployee(newEmploye))).toEqual({
        employees: [
            {
                firstName: 'Tony',
                lastName: 'Stark',
                birthDate: '05/29/1970',
                street: '10880 Malibu Point',
                city: 'Malibu',
                state: 'CA',
                zipCode: '90265',
                startDate: '08/13/1995',
                department: 'Engineering',
            },
        ],
    })
})

test('Should handle a employee being added an existing list', () => {
    const previousState = {
        employees: [
            {
                firstName: 'Tony',
                lastName: 'Stark',
                birthDate: '05/29/1970',
                street: '10880 Malibu Point',
                city: 'Malibu',
                state: 'CA',
                zipCode: '90265',
                startDate: '08/13/1995',
                department: 'Engineering',
            },
        ],
    }

    const aNewEmployeeAgain = {
        firstName: 'Bruce',
        lastName: 'Wayne',
        birthDate: '04/17/1915',
        street: '1007 Mountain Drive',
        city: 'Gotham City',
        state: 'NJ',
        zipCode: '07087',
        startDate: '03/11/1996',
        department: 'Legal',
    }

    expect(reducer(previousState, createEmployee(aNewEmployeeAgain))).toEqual({
        employees: [
            {
                firstName: 'Tony',
                lastName: 'Stark',
                birthDate: '05/29/1970',
                street: '10880 Malibu Point',
                city: 'Malibu',
                state: 'CA',
                zipCode: '90265',
                startDate: '08/13/1995',
                department: 'Engineering',
            },
            {
                firstName: 'Bruce',
                lastName: 'Wayne',
                birthDate: '04/17/1915',
                street: '1007 Mountain Drive',
                city: 'Gotham City',
                state: 'NJ',
                zipCode: '07087',
                startDate: '03/11/1996',
                department: 'Legal',
            },
        ],
    })
})
