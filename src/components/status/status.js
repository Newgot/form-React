import React, {useState} from "react";

import ModalForm from "../bloks/modal-form";
import './status.scss'

const Status = ({ username, status, onChangeStatus }) => {

    const [visible, setVisible] = useState(false)
    const showVisible = () => setVisible(true) // change?
    const changeStatus = label => {
        onChangeStatus(label)
        setVisible(false)
    }
    return (
        <section className='status'>
            <div className='status__row'>
                <div className='status__title'>
                    <h2 className='status__title-text'>Здравствуйте, <span
                        className="status__title-username">{username}</span></h2>
                </div>
                <div className="status__change">
                    <button
                        className='status__change-btn'
                        onClick={showVisible}>Сменить статус</button>
                </div>
            </div>
            <div className="status__row">
                <div className="status__content">
                    <p className='status__content--text'>{status}</p>
                </div>
            </div>

            <ModalForm
                visible={visible}
                onChange={changeStatus}
                text='Сменить статус'/>
        </section>
    )

}

export default Status