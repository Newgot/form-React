import React, {useState} from "react"

import {ModalForm} from "../bloks/modal-form"
import './status.scss'
import string from './string.json'

export const Status = ({username, status, setStatus}) => {
    const [visible, setVisible] = useState(false)
    const showVisible = () => setVisible(true)
    const changeStatus = label => {
        if (label) setStatus(label)
        setVisible(false)
    }
    return (
        <section className='status'>
            <div className='status__row'>
                <div className='status__title'>
                    <h2 className='status__title-text'>{string.hello}
                        <span className="status__title-username">{username}</span>
                    </h2>
                </div>
                <div className="status__change">
                    <button
                        className='status__change-btn'
                        onClick={showVisible}
                    >
                        {string.change_status}
                    </button>
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
                text={string.change_status}
                setStatus={setStatus}
            />
        </section>
    )
}
