import React, {useState} from 'react';

import './modal-form.scss'

const ModalForm = ({text, visible, onChange}) => {

    const [label, setLabel] = useState('')
    const onClick = (e) => {
        e.preventDefault()
        return onChange(label)
    }
    if (visible) {
        return (
            <div className='modal'>
                <div className='modal__container'>
                    <form action='' className='modal__form'>
                        <input
                            className='modal__form-input'
                            value={label}
                            onChange={(e) => setLabel(e.target.value)}
                            name='status'
                            type='text'/>
                        <button
                            className='modal__form-btn'
                            onClick={onClick}
                            type='submit'>
                            {text}
                        </button>
                    </form>
                </div>
            </div>
        )
    } else return ''

}

export default ModalForm