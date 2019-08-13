import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
} from './const';

import { 
    register
} from './api';


export const registerAction = user => {
    return dispatch => {
        dispatch(
            { type: REGISTER_REQUEST, payload: user }
        );
        
        // call api service
        register(user)
            .then(
                user => { 
                    dispatch({ 
                        type: REGISTER_SUCCESS, 
                        payload: user 
                    });
                },
                error => {
                    dispatch({ 
                        type: REGISTER_FAILURE,
                        payload: error.toString() 
                    });
                }
            );
    };
}
