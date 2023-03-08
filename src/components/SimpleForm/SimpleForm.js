import React from 'react'
import { Field, reduxForm } from 'redux-form'

import '../SimpleForm/SimpleForm.css'




const SimpleForm = (props) => {
  const { handleSubmit, submitting, pristine } = props
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
            <div>
                <label className='label'>Date of birth</label>
                <div>
                    <Field className='field' name="dateBirth" component="input" type="text" placeholder="Date of birth"/>             
                </div>
            </div>
            <div>
                <label className='label'>Start date</label>
                <div>
                    <Field className='field' name="startDate" component="input" type="text" placeholder="Start date"/>
                </div>
            </div>
            <div className='address'>
                <h3>Address</h3>
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
                        <Field className='fieldSelect' name="street" component="select" /> 
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
                    <Field className='fieldSelect' name="departement" component="select">
                            <option>Sales</option>
                            <option>Marketing</option>
                            <option>Engineering</option>
                            <option>Human Resources</option>
                            <option>Legal</option>
                    </Field>
                </div>
            </div>
            <div>
                <button className='buttonCreateForm' type="submit" disabled={ pristine || submitting }>Save</button>
            </div>
        </form>
    </div>
  )
}
export default reduxForm({
  form: 'simple'  // a unique identifier for this form
})(SimpleForm)

