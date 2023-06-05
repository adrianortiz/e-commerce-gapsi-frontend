import React from 'react'

const Modal = ({children, title, modal}) => {
  return (
    <div className='modal fade' id={modal} tabIndex='-1' aria-hidden='true'>
        <div className='modal-dialog'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <label className='h5'>{title}</label>
                    <button className='btn-close' type='button' data-bs-dismiss='modal' aria-label='Close'></button>
                </div>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Modal