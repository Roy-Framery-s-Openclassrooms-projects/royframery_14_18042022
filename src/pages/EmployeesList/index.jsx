// Components
import EmployeeTable from '../../components/EmployeesTable'
import { MainTitlePage } from '../../components/MainTitlePage'
// CSS
import './EmployeesList.scss'

/**
 * @description Component that show the Employee list page
 * @returns { HTMLElement }
 */
const EmployeesList = () => {
    return (
        <main className="employeesList">
            <MainTitlePage text="Employees list" />
            <EmployeeTable />
        </main>
    )
}

export default EmployeesList
