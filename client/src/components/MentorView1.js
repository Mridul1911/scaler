import React from 'react'
import AcceptedStudent from './AcceptedStudent'
import PendingViews from './PendingViews'

const MentorView1 = () => {
  return (
    <div>
      <h1>Mentor View 1</h1>
      <h3>Pending Students</h3>
      <PendingViews m_name="mentor1"/>
      <h2>Accepted Student</h2>
      <AcceptedStudent m_name="mentor1"/>
    </div>
  )
}

export default MentorView1
