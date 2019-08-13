import { INIT_STATE } from './initialState';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
} from './const';

// let user = JSON.parse(localStorage.getItem('user'));
// const initialState = user ? { loggedIn: true, user } : {};

export default function reducer(state = INIT_STATE, action) {
    
    switch(action.type) {

        case LOGIN_REQUEST:
          return {
            ...state,
            loading: true,
          };

        case LOGIN_SUCCESS:
          return {
            ...state,
            loggedIn: true,
            loading: false,
            user: action.payload
          };

        case LOGIN_FAILURE:
          return {
            ...state,
            loggedIn: false,
            loading: false,
            error: true,
            error_message: action.payload,
          };

        case LOGOUT:
          return {
            ...state,
            error: false,
            loading: false,
            loggedIn: false,
          };  

        default:
            return state;
    }
}
