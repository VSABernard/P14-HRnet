import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createEmployee } from '../../redux/slices/employeeSlice'

import ModalValidate from 'p14-modal-validate-plugin/dist/component/ModalValidate'

import HeaderApp from '../../components/Header/Header'
import SimpleForm from '../../components/SimpleForm/SimpleForm'

import '../CreateEmployee/CreateEmployee.css'

/**
 * Component React which displays the create employee's page of the app
 * @component
 * @returns The create employee's page of the app
 */

const CreateEmployee = () => {  

    /**
     * The hook that comes with React Router that will allow us to use the browser’s History API.
     */
    const nav = useNavigate()

    const [ show, setShow] = useState(false)
    const [ isCreated, setIsCreated] = useState(false)

    useEffect(() => {

        let goToCurrentEmployees = () => {
            nav ('/CurrentEmployees')
        }

        if(isCreated){
            goToCurrentEmployees()
        }        
    },[nav, isCreated])

    const dispatch = useDispatch()

    let submit = (employee) => {
        const newEmployee = {...employee}
        newEmployee.id = Date.now()                                     // unique id
        newEmployee.state = newEmployee.state.substring(0,2)            // cut the state into 2 characters        
        dispatch(createEmployee(newEmployee))
        setShow(true)        
    }  

    return (
        <div className='createEmployee'>
            <header className='headerCreate'>
                < HeaderApp />
                <div className='link'>
                    <Link className="currentLink" to='/CurrentEmployees'>
                        View Current Employees
                    </Link>
                </div>
            </header>
            <section className="createEmployeeSection">
                <SimpleForm className='simpleFormSection' onSubmit={submit} submitting="true" />
                < ModalValidate onClose={() => {
                    setShow(false)
                    setIsCreated(true)
                    }} 
                    show={ show } message={ 'Employee has been created !' }/>  
            </section>
        </div>
    )
}

export default CreateEmployee