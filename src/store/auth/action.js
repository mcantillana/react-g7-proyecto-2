import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
} from './const';

import { 
    login,
    logout,
} from './api';


export const loginAction = (username, password) => {
    return dispatch => {

        dispatch({ type: LOGIN_REQUEST, payload: username });

        //api call
        console.log('loginAction', username, password)
        login(username, password)
            .then(
                user => { 
                    // console.log('user',user)
                    dispatch({ type: LOGIN_SUCCESS, payload: username });

                },
                error => {
                    // console.log('error', error)
                    dispatch({ type: LOGIN_FAILURE, payload: error });
                }
            );
    };

}

export const logoutAction = () => {
    logout();
    return { type: LOGOUT };
}

