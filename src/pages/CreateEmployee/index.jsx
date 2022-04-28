import { useDispatch, useSelector } from 'react-redux'
// Components
import AddEmployeeForm from '../../components/CreateEmployeeForm'
import { MainTitlePage } from '../../components/MainTitlePage'
// selectors
import { selectModal } from '../../utils/selectors'
// actions
import { showModal } from '../../features/modal'
// CSS
import './CreateEmployee.scss'
// modal Package
import { Modal } from '@royframery_openclassrooms/modal'
import '@royframery_openclassrooms/modal/dist/index.css'

const CreateEmployee = () => {
    const isModal = useSelector(selectModal)
    window.document.title = 'HRnet - Create Employee'
    const dispatch = useDispatch()

    const resetModal = () => {
        dispatch(showModal())
    }

    return (
        <main className="employee">
            <MainTitlePage text="Create employee" />
            <AddEmployeeForm />
            <Modal
                text="Employee Created !"
                show={isModal}
                callBack={resetModal}
            />
        </main>
    )
}

export default CreateEmployee
