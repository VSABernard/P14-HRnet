import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createEmployee } from '../../redux/slices/employeeSlice'

import ModalValidate from 'p14-modal-validate-plugin'

import HeaderApp from '../../components/Header/Header'
import SimpleForm from '../../components/SimpleForm/SimpleForm'
import FooterApp from '../../components/Footer/Footer'

import '../CreateEmployee/CreateEmployee.css'

/**
 * Component React which displays the create employee's page of the app
 * @component
 * @returns The create employee's page of the app
 */

const CreateEmployee = () => {  

    const [ show, setShow] = useState(false)

    const dispatch = useDispatch()

    let submit = (employee) => {
        const newEmployee = {...employee}
        newEmployee.id = Date.now()                                     // unique id
        newEmployee.state = newEmployee.state.substring(0,2)            // cut the state into 2 characters    
        newEmployee.birthDate = formatDate(newEmployee.birthDate)       // format date into dd/mm/yyyy
        newEmployee.startDate = formatDate(newEmployee.startDate)
        dispatch(createEmployee(newEmployee))
        setShow(true)        
    }  

    /**
     * Convert date format from 'YYYY-MM-DD' into 'DD/MM/YYYY'
     * @param {string} date in 'YYYY-MM-DD' format
     * @returns a new date in 'DD/MM/YYYY' format
     */
    let formatDate = (date) => {
        
        let newDate = new Date(date)

        let year = newDate.toLocaleString("default", { year: "numeric" })
        let month = newDate.toLocaleString("default", { month: "2-digit" })
        var day = newDate.toLocaleString("default", { day: "2-digit" })
                
        const formatDate = day+"/"+month+"/"+year    
        return formatDate
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
                    }} 
                    show={ show } message={ 'Employee has been created !' }/>  
            </section>
            <FooterApp className='footerCreate' />
        </div>
    )
}

export default CreateEmployee
