import React from 'react'
import axios from "axios"
import { useState } from 'react'
const AddStudents = () => {
    const [user, setUser] = useState({ name: "", Project_name: "",mentor:""})
    const handleSubmit = (async (e) => {
        e.preventDefault();
        const condition = document.getElementById("condition");
        if (condition.checked === true) {
            console.log(user);
            axios.post("/enroll", user).then((res) => {
                console.log(res)
                if (res.status === 200) {
                    alert("Data Inserted Successfully")
                }
                else {
                    alert("invalid Data please try again with appropriate data")
                }
            })
            

        }
        else {
            alert("please check the term and condition")
        }

    })
    const handleChange = ((e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    })
    return (
        <>
            <section className="top_body">
                <h1>Student Enrollment</h1>
            </section>
            <section className="mid_body">
                <form className="user_form" onSubmit={handleSubmit} method="post">
                    Name : <input type="text" id="name" name="name" placeholder="Enter Your Name" required="" onChange={handleChange} />
                    Project Name : <input type="text" id="Project_name" name="Project_name" placeholder="Enter your Project Name" required="" onChange={handleChange} />
                    <input type="text" id="mentor" name="mentor" value="" hidden/>
                    <input type="submit" value="Submit" /></form>
            </section>
            <input type="checkbox" name="term" id="condition" />{/* onChange={handleChange1}/> */}
            <label htmlFor="">I agree to term & condition</label>
        </>
    )
}

export default AddStudents
