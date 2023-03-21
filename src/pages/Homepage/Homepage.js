import React from 'react'
import { Link } from 'react-router-dom'
import HeaderApp from '../../components/Header/Header'
import hrLogo from '../../assets/rh_logo.png'

import '../Homepage/Homepage.css'

const Homepage = () => {
  return (
    <div className="homepageSection">
      <HeaderApp />
      <main className="homepageMain">
            <div className="sentences">
                <img src={hrLogo} alt='Human resource logo' />
                <p>HRNet is a human resource management information system solution.</p>
                <p>Save time by automating and integrating conventional specifics for HR administrative tasks.</p>
                <p>Free up time for your employees!</p>
            </div>
            <Link className="createLink" to='/CreateEmployees'>
                Create Employee
            </Link>
      </main>
    </div>
  )
}

export default Homepage