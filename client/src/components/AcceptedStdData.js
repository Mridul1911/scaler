import React from 'react'

const AcceptedStdData = ({ m_n, data }) => {
    return (
        <>
            {
                data.map((curUser) => {
                    const { _id, name, Project_name,mentor } = curUser;
                    if(mentor===m_n){
                        return (
                            <tr key={_id}>
                                <td>{name}</td>
                                <td>{Project_name}</td>
                                <td>{mentor}</td>
                            </tr>
                        )
                    }
                    
                })
            }
        </>
    )
}

export default AcceptedStdData


/* // import React from 'react'

// const AcceptedStdData = ({ m_n, data }) => { */
//     console.log(data)
//     data.map((curdata) => {
//         const { _id, name, Project_name, mentor } = curdata;
//         console.log("hi")
//         return (
//             <tr key={_id}>
//                 <td>{name}</td>
//                 <td>{Project_name}</td>
//                 <td>{mentor}</td>
//             </tr>
//         )
//         // if (mentor === m_n) {
//         //     console.log(curdata);
//         //     console.log(mentor);
//         //     {/* <tr key={_id}>
//         //             <td>{name}</td>
//         //             <td>{Project_name}</td>
//         //             <td>{mentor}</td>
//         //         </tr> */}
//         //     return (
//         //         <tr>ho</tr>
//         //     )
//         // }
//         // else{
//         //     return 0;
//         // }
//         // else{
//         //     return (
//         //         <tr key={_id}>
//         //             <td>{name}</td>
//         //             <td>{Project_name}</td>
//         //             <td>{mentor}</td>
//         //         </tr>
//         //     )
//         // }
//     })
// }

// export default AcceptedStdData
