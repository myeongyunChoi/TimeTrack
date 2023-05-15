import { useState } from 'react'
import '../css/management.scss'
import NewEmployeeModal from '../modal/AddNewEmployee'

const HolidayManagement = () => {

    const [modalState, setModalState] = useState("modal_hide")
    const showModal = () => {
        setModalState(modalState === "modal_hide" ? "modal_show" : "modal_hide")
    }

    return (
        <>
            <div className="holiday_management">
                <p className="modal_btn" onClick={() => { showModal() }}>신규입사자 등록</p>
            </div>
            <NewEmployeeModal modalState={modalState} showModal={showModal} />
        </>

    );
}


export default HolidayManagement;
