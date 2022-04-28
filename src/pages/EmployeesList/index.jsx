// Components
import EmployeeTable from '../../components/EmployeesTable'
import { MainTitlePage } from '../../components/MainTitlePage'
// CSS
import './EmployeesList.scss'

const EmployeesList = () => {
    return (
        <main className="employeesList">
            <MainTitlePage text="Employees list" />
            <EmployeeTable />
        </main>
    )
}

export default EmployeesList
