// Components
import AddEmployeeForm from '../../components/AddEmployeeForm'
// CSS
import './AddEmployee.scss'

const AddEmployee = () => {
    window.document.title = 'HRnet - Add Employee'

    return (
        <main className="employee">
            <h1 className="sr-only">Add employee</h1>
            <AddEmployeeForm />
        </main>
    )
}

export default AddEmployee
