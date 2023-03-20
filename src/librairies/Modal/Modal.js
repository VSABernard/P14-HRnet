import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { createEmployee } from '../../redux/slices/employeeSlice'


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