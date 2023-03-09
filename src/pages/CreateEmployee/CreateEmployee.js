import React from 'react'
import { Link } from 'react-router-dom'

import HeaderApp from '../../components/Header/Header'
import SimpleForm from '../../components/SimpleForm/SimpleForm'

import '../CreateEmployee/CreateEmployee.css'

/**
 * Component React which displays the create employee's page of the app
 * @component
 */

const CreateEmployee = () => {    
   
    const handleSubmit = (employee) => {
        console.log('hande submit called!')
        console.log('employee : ' + JSON.stringify(employee))
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
                <SimpleForm className='simpleFormSection'  onSubmit={ handleSubmit } submitting="true" />
            </section>
        </div>
    )
}

export default CreateEmployee