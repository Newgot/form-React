import React, {useRef, useState} from 'react'

import './modal-form.scss'

export const ModalForm = ({text, visible, onChange}) => {
    const statusRef = useRef()
    if (!visible) {
        return null;
    }

    const onSubmit = (e) => {
        e.preventDefault()
        return onChange(statusRef.current.value)
    }

    return (
        <div className='modal'>
            <div className='modal__container'>
                <form
                    className='modal__form'
                    onSubmit={onSubmit}
                >
                    <input
                        ref={statusRef}
                        className='modal__form-input'
                        name='status'
                        type='text'
                    />
                    <button
                        className='modal__form-btn'
                        type='submit'
                    >
                        {text}
                    </button>
                </form>
            </div>
        </div>
    )
}
