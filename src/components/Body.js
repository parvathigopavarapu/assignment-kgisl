import React, {useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UserList from './UserList'
import UserProfile from './UserProfile';
import {connect } from 'react-redux';
import {fetchUsers, setTab} from '../redux/index'


const Body = ({userList,tabIndex, fetchUsers,setTab}) => {
    
    useEffect(() => {
        fetchUsers()
    })

    const tab = tabIndex;
    return <div className="tabs">
        <h4>
            {tab === 0 ? "User List" : "User Profile"}
        </h4>
        <Tabs  selectedIndex={tabIndex}
            onSelect={tabIndex => setTab(tabIndex)}>
            <TabList>
                <Tab eventkey={tabIndex}><strong>User List</strong></Tab>
                <Tab eventkey={tabIndex}><strong>User Profile</strong></Tab>
            </TabList>
            <TabPanel><UserList users={userList} /> </TabPanel>
            <TabPanel><UserProfile /></TabPanel>

        </Tabs>

    </div>
}
const mapStateToProps = (state) => {
    return {
        userList : state.users,
        tabIndex: state.tabIndex

    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        fetchUsers : () => dispatch(fetchUsers()),
        setTab : (tabIndex) => dispatch(setTab(tabIndex))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Body);
