import React from 'react'
import { Link } from 'react-router-dom'

import SimpleForm from '../../components/SimpleForm/SimpleForm'

import '../CreateEmployee/CreateEmployee.css'

/**
 * Component React which displays the create employee's page of the app
 * @component
 */

const CreateEmployee = () => {
    
    const handleSubmit = () => {
        console.log('hande submit called!')
    }

    return (
        <div className='createEmployee'>
            <header className='headerCreate'>
                <h1>HRnet</h1>
                <Link className="currentLink" to='/CurrentEmployees'>
                    View Current Employees
                </Link>
            </header>
            <section className="createEmployeeSection">
                <SimpleForm className='simpleFormSection' onSubmit={ handleSubmit } submitting="true" />
            </section>
        </div>
    )
}

export default CreateEmployee