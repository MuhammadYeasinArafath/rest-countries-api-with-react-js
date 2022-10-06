import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const Navbar = ({ theme, setTheme}) => {
    
    return (
        <nav className={theme ? "bg-dark-element navbar navbar-expand shadow-sm p-4" : "bg-white navbar navbar-expand shadow-sm p-4"}>
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1" style={{cursor: 'pointer'}}>Where in the world?</span>
                <p className='fw-bold mb-0 text-nowrap' style={{cursor: 'pointer'}} onClick={() => setTheme(!theme)}>
                    {theme ? <FaSun className='me-2' /> : <FaMoon className='me-2' /> }
                    {theme ? "Light Theme" : "Dark Theme" }</p>
            </div>
        </nav>
    )
}

export default Navbar