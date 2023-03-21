import React from 'react'
import '../Modal/Modal.css'

const Modal = (props) => {    

    if(!props.show) {
            return null
        }   
      
    return( 
            <div className='modal' onClick={props.onClose}>
                <div className='modalBody'>
                    Employee have been created !
                </div> 
                <div className='closeButton' onClick={props.onClose} submitting="true">
                    X
                </div>
            </div>
    )
}

export default Modal