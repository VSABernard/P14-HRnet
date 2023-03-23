import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import HeaderApp from '../../components/Header/Header'
import Table from '../../components/Table/Table'
import FooterApp from '../../components/Footer/Footer'
// import { data } from '../../datas/employeesData'

import '../CurrentEmployees/CurrentEmployees.css'

/**
 * Component React which display the page of current employees datas list
 * @component
 * @returns The page of current employees datas list
 */

const CurrentEmployees = () => {   

    const employees = useSelector(state => state.employeeReducer.employees)

    return (
        <div className='currentEmployeesSection'>
            <HeaderApp/> 
            <div className='currentEmployeesBody'>
                <Table className='tableEmployee' employees={employees}/>
                <Link className="homeLink" to='/'>
                    Home
                </Link>
            </div>  
            <FooterApp className='footerCurrent' />
        </div>
    )    
}

export default CurrentEmployees