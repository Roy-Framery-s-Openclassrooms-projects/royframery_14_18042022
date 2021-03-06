// Components
import CreateEmployeeForm from '../../components/CreateEmployeeForm'
import { MainTitlePage } from '../../components/MainTitlePage'
// CSS
import './CreateEmployee.scss'

/**
 * @description Component that show the create employee page
 * @returns { HTMLElement }
 */
const CreateEmployee = () => {
    window.document.title = 'HRnet - Create Employee'

    return (
        <main className="employee">
            <MainTitlePage text="Create employee" />
            <CreateEmployeeForm />
        </main>
    )
}

export default CreateEmployee
