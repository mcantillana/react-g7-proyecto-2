import { INIT_STATE } from './initialState';
import {
    GET_USERS_INIT,
    GET_USERS_SUCCESS,
    GET_USERS_ERROR 
} from './const';


export default function reducer(state = INIT_STATE, action) {
    
    switch(action.type) {
    
        default:
            return state;
    }
}
