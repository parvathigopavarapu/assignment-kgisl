import React from 'react'

const User = (props) =>{
    const { id, first_name, last_name, email} = props.user;
    return (<React.Fragment>
        <tr key = {id}>
            <td>{id}</td>
            <td>{first_name}</td>
            <td>{last_name}</td>
            <td>{email} </td>
        </tr>
    
    </React.Fragment>);
}
export default User;