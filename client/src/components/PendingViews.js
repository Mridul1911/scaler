import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import UserData from './UserData';
const PendingViews = (m_name) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetchUser();
  }, [user])
  
  const [use, setUse] = useState([]);
  
  const handleOnSubmit = (e) => {
    console.log(m_name);
    // e.preventDefault();
    console.log(use);
    axios.post("/updateMentor", use).then((res) => {
      console.log(res)
      if (res.status === 200) {
          alert("Data Inserted Successfully")
      }
      else {
          alert("invalid Data please try again with appropriate data")
      }
  })
  }
  const handleonchange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    console.log(value, checked)
    if (checked) {
      setUse([...use, value])
    }
    else {
      setUse(use.filter((e) => (e !== value)))
    }
  }
  const fetchUser = async () => {
    try {
      const res = await fetch("/user", {
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
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Project Name</th>
            <th>Accept</th>
          </tr>
        </thead>
        <tbody>
          <UserData users={user} handleonchange={handleonchange} />
        </tbody>
      </table>
      <form action="" onSubmit={handleOnSubmit}>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default PendingViews
