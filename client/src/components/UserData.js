import React from 'react'

const UserData = ({users,handleonchange}) => {
    
    
  return (
    <>
      {
        users.map((curUser)=>{
            const {_id,name,Project_name}=curUser;
            return(
                <tr key={_id}>
                    <td>{_id}</td>
                    <td>{name}</td>
                    <td>{Project_name}</td>
                    <td>{<input type="checkbox" name="user" value={_id} id={_id} onChange={handleonchange} />}</td>
                </tr>
            )
        })
      }
    </>
  )
}

export default UserData;
