

import {FETCH_USERS, LOADING} from './actionTypes'
import axios from 'axios'

export const fetchUsers = () => dispatch => {
    // axios.get(`https://reqres.in/api/users`).then(res =>  res.data).then(users => 
    // this.setState({users:users.data}))   
    axios.get('https://reqres.in/api/users').then(
        res => res.data
    ).then(data => dispatch({
        type: FETCH_USERS,
        playload:data.data
    }))
    
}
export const setLoading = () => {
    return {
      type: LOADING
    };
  };