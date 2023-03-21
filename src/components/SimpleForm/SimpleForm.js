import React from 'react'
import { Field, Form } from 'react-final-form'

import { statesDatas } from '../../datas/statesDatas'
import { departementsData } from '../../datas/departementsDatas'

import '../SimpleForm/SimpleForm.css'

/**
 * Component React that displays the create employees form
 * @param {props} props 
 * @returns The creation employees form
 */    

const SimpleForm = ({onSubmit}) => {    

    return (
    <div className='simpleForm'>
        <h2>Create Employee</h2>
        <Form className='simpleFormWrapper' onSubmit={ onSubmit } initialValues={''}
                render= {({ handleSubmit, form, submitting, pristine, values }) => (    
            <form onSubmit={handleSubmit}>
                <div className='name'>
                    <label className='label'>First Name</label>
                    <Field className='fieldName' name="firstName" component='input' type="text"/>
                </div>

                <div className='name'>
                    <label className='label'>Last Name</label>
                    <Field className='fieldName' name="lastName" component='input'/>
                </div>

                <div className='birthDate'>
                    <label className='label'>Date of Birth</label>
                    <Field className='fieldDate' name="birthDate" component='input' type='date' />
                </div>
                
                <div className='startDate'>
                    <label className='label'>Start Date</label>
                    <Field className='fieldDate' name="startDate" component='input' type='date'  />
                </div> 

                <div className='address'>
                    <div className='titleAddress'>
                        <h3>Address</h3>
                    </div>
                    
                    <div className='addressForm'>
                        <label className='label'>Street</label>
                        <Field className='fieldAdress' name="street" component='input' type="text"/> 
                    </div>
                    <div className='addressForm'>
                        <label className='label'>City</label>
                        <Field className='fieldAdress' name="city" component='input' type="text"/> 
                    </div>
                    <div className='addressForm'>
                        <label className='label'>State</label>
                        <Field className='fieldSelectState' name="state" component="select" >
                            <option className='choose'>-- Choose state --</option>
                            {
                                statesDatas.map(state => {
                                    return (
                                    <option className='state' key={state.abbreviation}>
                                        {state.abbreviation} -- {state.name}
                                    </option>)
                                })                                
                            }
                        </Field>
                    </div>
                    <div className='addressForm'>
                        <label className='label'>Zip Code</label>
                        <Field className='fieldAdress' name="zipCode" component='input' type="text"/> 
                    </div>
                </div>

                <div>
                    <label className='label'>Departement</label>
                    <Field className='fieldSelectDepartement' name="departement" component="select">
                        <option className='choose'>-- Choose departement --</option>
                        {
                            departementsData.map(departement => {
                                return (<option key={departement.name}>{departement.name}</option>)
                            })                                
                        }
                    </Field>
                </div>

                <div className='buttonSave'>
                    <button className='buttonCreateForm' type="submit" disabled={ pristine || submitting } >
                        Save
                    </button> 
                </div>                
            </form>   
            )}
        />
        
    </div>

)}

export default SimpleForm 