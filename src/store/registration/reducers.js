import { INIT_STATE } from './initialState';
import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
} from './const';

// let user = JSON.parse(localStorage.getItem('user'));
// const initialState = user ? { loggedIn: true, user } : {};

export default function reducer(state = INIT_STATE, action) {
    
    switch(action.type) {

      
        case REGISTER_REQUEST:
            return {
              ...state, 
              loading: true 
            };
        case REGISTER_SUCCESS:
            return {
               ...state,
               loading: false,
               valid_register: true,
            };
        
        case REGISTER_FAILURE:
            return {
              ...state,
              loading: false,
              error: true,
            };

        default:
            return state;
    }
}
