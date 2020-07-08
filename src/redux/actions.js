

import { FETCH_USERS, ID_USER, SET_TAB } from './actionTypes'
import axios from 'axios'

export const fetchUsers = () => dispatch => {
    axios.get('https://reqres.in/api/users').then(
        res => res.data
    ).then(data => dispatch({
        type: FETCH_USERS,
        playload: data.data
    }))

}
export const viewUser = (id) => dispatch => {
    axios.get(`https://reqres.in/api/users/${id}`).then(
        res => res.data
    ).then(data =>
        dispatch({
            type: ID_USER,
            playload: data.data
        }),
    )
}
export const setTab = (tabIndex) => {
    return {
        type: SET_TAB,
        playload: tabIndex
    };
};