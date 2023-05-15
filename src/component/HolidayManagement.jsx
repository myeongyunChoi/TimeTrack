import { useState } from 'react'
import '../css/management.scss'
import NewEmployee from '../modal/AddNewEmployee'

const HolidayManagement = () => {

    const [modalState, setModalState] = useState("modal_hide")
    const showModal = () => {
        setModalState("modal_show")
    }

    return (
        <>        
        <div className="holiday_management">
            <p className="modal_btn" onClick={() => { showModal() }}>신규입사자 등록</p>
        </div>
        <NewEmployee modalState={modalState} />
        </>

    );
}


export default HolidayManagement;
