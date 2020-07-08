import React from 'react'
import User from './User'

class UserList extends React.Component{
    render(){
        const {users} = this.props;
        return <React.Fragment>
             <table>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last name</th>
                    <th>Email</th>
                    </tr>
                </thead>
                <tbody>

                    {users ? users.map(user => {
                        return (
                            <User
                                key={user.id}
                                user={user} onClick={} />
                        );

                    }) : null
                    }

                </tbody>
            </table>

        </React.Fragment>
    }
}
export default UserList;