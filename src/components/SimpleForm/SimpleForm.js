import React, { useState } from 'react'
//import { useDispatch } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { statesDatas } from '../../datas/statesDatas'
import { departementsData } from '../../datas/departementsDatas'
import DatePicker from 'react-multi-date-picker'
import InputIcon from "react-multi-date-picker/components/input_icon"

import '../SimpleForm/SimpleForm.css'

/**
 * The validation logic
 */
const validate = employee => {
    const errors = {}
    if (!employee.firstName) {
      errors.firstName = 'Required'
    } else if (employee.firstName.length < 2) {
      errors.firstName = 'Minimum be 2 characters or more'
    }
    if (!employee.lastName) {
        errors.lastName = 'Required'
      } else if (employee.lastName.length < 2) {
        errors.lastName = 'Minimum be 2 characters or more'
    }
    if (!employee.street) {
        errors.street = 'Required'
      } else if (employee.street.length < 2) {
        errors.street = 'Minimum be 2 characters or more'
    }
    if (!employee.city) {
        errors.city = 'Required'
      } else if (/^\d{5}$/i.test(employee.zipCode)) {
        errors.city = 'Minimum be 2 characters or more'
    }
    if (!employee.zipCode) {
        errors.zipCode = 'Required'
      } else if (employee.zipCode.length < 2) {
        errors.zipCode = 'Minimum be 2 characters or more'
    }
    return errors
}

/**
 * Function to handle the submission process
 */

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <label className="control-label">{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} className="form-control" />
        {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

/**
 * Component React that displays the create employees form
 * @param {props} props 
 * @returns The creation employees form
 */

let SimpleForm = (props) => {
    const { handleSubmit, submitting, pristine } = props
    const [ birthDate, setBirthDate ] = useState(new Date())
    const [ startDate, setStartDate ] = useState(new Date())
  
    // const dispatch = useDispatch()

    // const handleSubmit = (employee) =>
    //    // e.preventDefault()
    //    // dispatch(simpleForm())
    //    alert(JSON.stringify(employee))

    return (
        <div className='simpleForm'>
            <h2>Create Employee</h2>
            <form className='simpleFormWrapper' onSubmit={ handleSubmit }>    
                <div>
                    <label className='label'>First Name</label>
                    <div>
                        <Field className='field' name="firstName" component={ renderField } type="text" placeholder="First Name" />
                    </div> 
                </div>
                <div>
                    <label className='label'>Last Name</label>
                    <div>
                        <Field className='field' name="lastName" component={ renderField } type="text" placeholder="Last Name"/>
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
                            <Field className='field' name="street" component={ renderField } type="text" placeholder="Street"/> 
                        </div>
                    </div>
                    <div className='addressForm'>
                        <label className='label'>City</label>
                        <div>
                            <Field className='field' name="city" component={ renderField } type="text" placeholder="City"/> 
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
                            <Field className='field' name="zipCode" component={ renderField } type="text" placeholder="Zip Code"/> 
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
  form: 'simple',               // a unique identifier for this form
  validate
})(SimpleForm)

export default SimpleForm 