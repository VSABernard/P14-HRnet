import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createEmployee } from '../../redux/slices/employeeSlice'
import HeaderApp from '../../components/Header/Header'
import SimpleForm from '../../components/SimpleForm/SimpleForm'

import '../CreateEmployee/CreateEmployee.css'

/**
 * Component React which displays the create employee's page of the app
 * @component
 * @returns The create employee's page of the app
 */

const CreateEmployee = () => {  
    
    const dispatch = useDispatch()

    /**
     * The hook that comes with React Router that will allow us to use the browser’s History API.
     */
    const nav = useNavigate()

    let submit = (employee) => {
        alert("submitted")
        console.log(employee)

        const newEmployee = {...employee}

        newEmployee.dateOfBirth = '03/06/2000'
        newEmployee.startDate = '03/09/2023'
        newEmployee.id = Date.now()                    // unique id
        dispatch(createEmployee(newEmployee))
        nav ('/CurrentEmployees')
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
            </section>
        </div>
    )
}

export default CreateEmployee