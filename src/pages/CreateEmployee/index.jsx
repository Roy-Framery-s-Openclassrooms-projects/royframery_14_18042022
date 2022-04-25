// Components
import AddEmployeeForm from '../../components/CreateEmployeeForm'
// CSS
import './CreateEmployee.scss'

const CreateEmployee = () => {
    window.document.title = 'HRnet - Create Employee'

    return (
        <main className="employee">
            <h1 className="sr-only">Create employee</h1>
            <AddEmployeeForm />
        </main>
    )
}

export default CreateEmployee
