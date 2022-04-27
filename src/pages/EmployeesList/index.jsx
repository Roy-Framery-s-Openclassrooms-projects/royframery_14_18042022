import EmployeeTable from '../../components/EmployeesTable'
// CSS
import './EmployeesList.scss'

const EmployeesList = () => {
    return (
        <main className="employeesList">
            <h1 className="employeesList__title sr-only">Employees list</h1>
            <EmployeeTable />
        </main>
    )
}

export default EmployeesList
