import React from 'react'
import { connect } from 'react-redux';
import {viewUser} from '../redux/index'

const User = (props) =>{
    const { id, first_name, last_name, email} = props.user;
    return (<React.Fragment>
        <tr key = {id} onClick={()=> props.viewUser(id)}>
            <td>{id}</td>
            <td>{first_name}</td>
            <td>{last_name}</td>
            <td>{email} </td>
        </tr>
    
    </React.Fragment>);
}
const mapDispatchToProps = dispatch => {
    return {
        viewUser: (id) => dispatch(viewUser(id))
    }
}
export default connect(null,mapDispatchToProps)(User);