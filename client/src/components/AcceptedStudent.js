import React, { useState, useEffect } from 'react'
import AcceptedStdData from './AcceptedStdData';

const AcceptedStudent = ({ m_name }) => {
    useEffect(() => {
        fetchUser();
    }, [])
    const [user, setUser] = useState([]);
    const fetchUser = async () => {
        try {
            const res = await fetch("/active", {
                method: "GET",
                headers: {
                    // Accept:"application/json",
                    "Content-type": "application/json"
                },
                credentials: "include"
            });
            const data = await res.json();
            setUser(data);
        }
        catch (e) {
            console.error(e);
        }
    }
    if (m_name === "mentor1") {

        return (
            <>
                {/* {console.log(user)} */}
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Project Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <AcceptedStdData m_n="mentor1" data={user} />
                        {/* <tr>hello</tr> */}
                    </tbody>
                </table>


            </>
        )
    }
    else {
        return (
            <div>
                {console.log(user)}
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Project Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <AcceptedStdData m_n="mentor2" data={user} />
                        {/* <tr>helo</tr> */}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default AcceptedStudent
