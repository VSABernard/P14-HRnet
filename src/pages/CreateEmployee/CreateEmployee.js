import React from 'react'
import { Link } from 'react-router-dom'

import HeaderApp from '../../components/Header/Header'
import SimpleForm from '../../components/SimpleForm/SimpleForm'

import '../CreateEmployee/CreateEmployee.css'

/**
 * Component React which displays the create employee's page of the app
 * @component
 * @returns The create employee's page of the app
 */

const CreateEmployee = () => {    
   
    
    let submit = (values) => {
        alert("submitted")
        console.log(values)
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