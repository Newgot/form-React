import React, { useState } from 'react';

import './modal-form.scss'

const ModalForm = ({ text, visible, onChange }) => {

    const [label, setLabel] = useState('')
    // юз стейт
    // useRef попробуй без useState

    if (!visible) {
        return null;
    }

    const onClick = (e) => {
        // e.preventDefault()
        return onChange(label)
    }

    return (
        <div className='modal'>
            <div className='modal__container'>
                <form action='' className='modal__form' onSubmit={console.log}>
                    <input
                        className='modal__form-input'
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                        name='status'
                        type='text' 
                    />
                    <button
                        className='modal__form-btn'
                        onClick={onClick}
                        type='submit'
                    >
                        {text}
                    </button>
                </form>
            </div>
        </div>
    )


}

export default ModalForm