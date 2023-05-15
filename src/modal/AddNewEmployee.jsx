import '../css/management.scss'

const NewEmployeeModal = ({ modalState, showModal }) => {
    return (
        <>
            <div className={`new_employee ${modalState}`}>
                <h3>신규 입사자 등록하기</h3>
                <ul>
                    <li>
                        <p>직원이름</p>
                    </li>
                    <li>
                        <input type="text" name="name" id="name" />
                    </li>
                    <li><p>입사일</p></li>
                    <li>
                        <input type="date" name="joining_date" id="joining_date" />
                    </li>
                    <li>
                        <p>연차</p>
                    </li>
                    <li>
                        <input type="text" name="annual" id="annual" />
                    </li>
                    <li className="add_btn_box">
                        <span className="madal_save_btn" onClick={()=>{showModal()}}>등록하기</span>
                        <span className="modal_close_btn" onClick={()=>{showModal()}}>닫기</span>
                    </li>
                </ul>
            </div>
            <div id="modal_back" className={`modal_back  ${modalState}`} ></div>
        </>
    );
}


export default NewEmployeeModal;
