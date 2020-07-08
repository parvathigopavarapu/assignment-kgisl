import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UserList from './UserList'
import UserProfile from './UserProfile';
import {connect } from 'react-redux';
import {fetchUsers} from '../redux/index'


const Body = ({userList, fetchUsers}) => {
    const [key, setKey] = useState(0);
    useEffect(() => {
        fetchUsers()
    },[])

    const tab = key;
    return <div className="tabs">
        <h4>
            {tab === 0 ? "User List" : "User Profile"}
        </h4>
        <Tabs activekey={key}
            onSelect={key => setKey(key)}>
            <TabList
                onSelect={index => console.log(index)}>
                <Tab eventkey="User List"><strong>User List</strong></Tab>
                <Tab eventkey="User Profile"><strong>User Profile</strong></Tab>
            </TabList>
            <TabPanel><UserList users={userList} /> </TabPanel>
            <TabPanel><UserProfile /></TabPanel>

        </Tabs>

    </div>
}
const mapStateToProps = (state) => {
    return {
        userList : state.users

    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        fetchUsers : () => dispatch(fetchUsers())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Body);
