import React from 'react'
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <section>
            <div>
                <NavLink to="/Mentor1" >Mentor1</NavLink>
                <NavLink to="/Mentor2" >Mentor2</NavLink>
                <NavLink to="/addstudent" >Add Student</NavLink>
            </div>
        </section>
    )
}

export default Navbar
