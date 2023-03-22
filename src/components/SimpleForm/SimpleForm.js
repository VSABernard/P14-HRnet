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
                    <label className='label' aria-label='firstName'>First Name</label>
                    <Field className='fieldName' name="firstName" aria-label='firstName' component='input' type="text"/>
                </div>

                <div className='name'>
                    <label className='label' aria-label='lastName'>Last Name</label>
                    <Field className='fieldName' name="lastName" aria-label='lastName' component='input'/>
                </div>

                <div className='birthDate'>
                    <label className='label' aria-label='birth'>Date of Birth</label>
                    <Field className='fieldDate' name="birthDate" aria-label='birth' component='input' type='date' />
                </div>
                
                <div className='startDate'>
                    <label className='label' aria-label='start'>Start Date</label>
                    <Field className='fieldDate' name="startDate" aria-label='start' component='input' type='date'  />
                </div> 

                <div className='address'>
                    <div className='titleAddress'>
                        <h3>Address</h3>
                    </div>
                    
                    <div className='addressForm'>
                        <label className='label' aria-label='street'>Street</label>
                        <Field className='fieldAdress' name="street" aria-label='street' component='input' type="text"/> 
                    </div>
                    <div className='addressForm'>
                        <label className='label' aria-label='city'>City</label>
                        <Field className='fieldAdress' name="city" aria-label='city' component='input' type="text"/> 
                    </div>
                    <div className='addressForm'>
                        <label className='label' aria-label='state'>State</label>
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
                        <label className='label' aria-label='zipCode'>Zip Code</label>
                        <Field className='fieldAdress' name="zipCode" aria-label='zipCode' component='input' type="text"/> 
                    </div>
                </div>

                <div>
                    <label className='label' aria-label='departement'>Departement</label>
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