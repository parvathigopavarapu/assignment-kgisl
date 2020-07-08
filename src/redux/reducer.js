import {
    FETCH_USERS,
    ID_USER,
    SET_TAB
} from './actionTypes'

const initialState = {
    users:[],
    user:'',
    tabIndex:0
};
function usersReducer (state= initialState, action){
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                users:action.playload,
            }
            case ID_USER:
                return {
                    ...state,
                    user:action.playload,
                    tabIndex:1
                }
                case SET_TAB:
                return {
                    ...state,
                    tabIndex:action.playload
                }
        
        default:
            return state;
    }
}

export default usersReducer;