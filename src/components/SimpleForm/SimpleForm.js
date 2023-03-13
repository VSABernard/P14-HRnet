import React, { useState } from 'react'
// import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { statesDatas } from '../../datas/statesDatas'
import { departementsData } from '../../datas/departementsDatas'
import DatePicker from 'react-multi-date-picker'
import InputIcon from "react-multi-date-picker/components/input_icon"

import '../SimpleForm/SimpleForm.css'

/**
 * Component React that displays the create employees form
 * @param {props} props 
 * @returns The create employees form
 */

let SimpleForm = (props) => {
    const { handleSubmit, submitting, pristine } = props
    const [ birthDate, setBirthDate ] = useState(new Date())
    const [ startDate, setStartDate ] = useState(new Date())
  
  return (
    <div className='simpleForm'>
        <h2>Create Employee</h2>
        <form className='simpleFormWrapper' onSubmit={ handleSubmit }>    
            <div>
                <label className='label'>First Name</label>
                <div>
                    <Field className='field' name="firstName" component="input" type="text" placeholder="First Name" />
                </div> 
            </div>
            <div>
                <label className='label'>Last Name</label>
                <div>
                    <Field className='field' name="lastName" component="input" type="text" placeholder="Last Name"/>
                </div>
            </div>
            <div className='date'>
                <label className='label'>Date of birth</label>
                <DatePicker showIcon selected={birthDate} onChange={(date) => setBirthDate(date)}
                    format='MM/DD/YYYY' render={<InputIcon/>} />
            </div>
            <div className='date'>
                <label className='label'>Start date</label>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}
                    format='MM/DD/YYYY' render={<InputIcon/>} />                
            </div>
            <div className='address'>
                <div className='titleAddress'>
                    <h3>Address</h3>
                </div>
                
                <div className='addressForm'>
                    <label className='label'>Street</label>
                    <div>
                        <Field className='field' name="street" component="input" type="text" placeholder="Street"/> 
                    </div>
                </div>
                <div className='addressForm'>
                    <label className='label'>City</label>
                    <div>
                        <Field className='field' name="city" component="input" type="text" placeholder="City"/> 
                    </div>
                </div>
                <div className='addressForm'>
                    <label className='label'>State</label>
                    <div>
                        <Field className='fieldSelectState' name="state" component="select" >
                            <option className='choose'>-- Choose state --</option>
                            {
                                statesDatas.map(state => {
                                    return (<option key={state.abbreviation}>{state.name}</option>)
                                })                                
                            }
                        </Field>
                    </div>
                </div>
                <div className='addressForm'>
                    <label className='label'>Zip Code</label>
                    <div>
                        <Field className='field' name="zipCode" component="input" type="text" placeholder="Zip Code"/> 
                    </div>
                </div>
            </div>
            <div>
                <label className='label'>Departement</label>
                <div>
                    <Field className='fieldSelectDepartment' name="departement" component="select">
                            <option className='choose'>-- Choose departement --</option>
                            {
                                departementsData.map(departement => {
                                    return (<option key={departement.name}>{departement.name}</option>)
                                })                                
                            }
                    </Field>
                </div>
            </div>
            <div className='buttonSave'>
                <button className='buttonCreateForm' type="submit" disabled={ pristine || submitting }>Save</button>
            </div>
        </form>
    </div>
  )
}

// Decorate with redux-form
SimpleForm = reduxForm({
  form: 'simple'  // a unique identifier for this form
})(SimpleForm)

export default SimpleForm 