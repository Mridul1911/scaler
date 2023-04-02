import React from 'react'
import AcceptedStudent from './AcceptedStudent'
import PendingViews from './PendingViews'

const MentorView2 = () => {
  return (
    <div>
      <h1>Mentor View 2</h1>
      <h2>Pending Students</h2>
      <PendingViews m_name="mentor2"/>
      <h2>Accepted Student</h2>
      <AcceptedStudent m_name="mentor2"/>
    </div>
  )
}

export default MentorView2
