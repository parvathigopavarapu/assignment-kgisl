import {
    FETCH_USERS,
    LOADING
} from './actionTypes'

const initialState = {
    users:[],
    loading:false
};
function usersReducer (state= initialState, action){
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                users:action.playload,
                loading:false
            }
    
        default:
            return state;
    }
}

export default usersReducer;