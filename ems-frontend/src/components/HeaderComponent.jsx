import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                    <a className="navbar-brand" href="https://www.testems.com">Employee Management System</a>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <NavLink className='nav-link' to='/employees'>Employees</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className='nav-link' to='/depatments'>Departments</NavLink>

                            </li>
                        </ul>
                    </div>

                </nav>

            </header>
        </div>
    )
}

export default HeaderComponent