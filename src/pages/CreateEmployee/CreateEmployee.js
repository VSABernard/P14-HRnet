import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createEmployee } from '../../redux/slices/employeeSlice'

import HeaderApp from '../../components/Header/Header'
import SimpleForm from '../../components/SimpleForm/SimpleForm'
import Modal from '../../librairies/Modal/Modal'

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
        newEmployee.id = Date.now()                    // unique id
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
                <Modal onClose={() => {
                    setShow(false)
                    setIsCreated(true)
                    }} 
                    show={ show }/>  
            </section>



        </div>
    )
}

export default CreateEmployee