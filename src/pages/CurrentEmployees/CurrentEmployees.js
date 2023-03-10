import React from 'react'
import { Link } from 'react-router-dom'

import HeaderApp from '../../components/Header/Header'
import Table from '../../components/Table/Table'

// import { data } from '../../datas/employeesData'

import '../CurrentEmployees/CurrentEmployees.css'

/**
 * 
 * @returns Page of employees datas list
 */

const CurrentEmployees = () => {   

    return (
        <div className='currentEmployeesSection'>
            <HeaderApp/> 
            <div className='currentEmployeesBody'>
                <Table/>
                <Link className="homeLink" to='/'>
                    Home
                </Link>
            </div>    
        </div>
    )    
}

export default CurrentEmployees