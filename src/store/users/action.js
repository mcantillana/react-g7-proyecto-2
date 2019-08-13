import {
    SET_FAVORITE_EPISODE_INIT,
    SET_FAVORITE_EPISODE_SUCCESS,
    SET_FAVORITE_EPISODE_ERROR,
    REMOVE_FAVORITE_EPISODE_INIT,
    REMOVE_FAVORITE_EPISODE_SUCCESS,
    REMOVE_FAVORITE_EPISODE_ERROR,

    SET_FAVORITE_CHARACTER_INIT,
    SET_FAVORITE_CHARACTER_SUCCESS,
    SET_FAVORITE_CHARACTER_ERROR,
    REMOVE_FAVORITE_CHARACTER_INIT,
    REMOVE_FAVORITE_CHARACTER_SUCCESS,
    REMOVE_FAVORITE_CHARACTER_ERROR,

    GETALL_REQUEST,
    GETALL_SUCCESS,
    GETALL_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
    
} from './const';

import { 
    setFavoriteEpisode, 
    setFavoriteCharacter, 
    getAll, 
    getById, 
    removeFavoriteEpisode, 
    removeFavoriteCharacter, 
} from './api';


export const setFavoriteEpisodeAction = payload => {

    return dispatch => {
        
        dispatch({ type: SET_FAVORITE_EPISODE_INIT });

        setFavoriteEpisode(payload).then(response => {
            dispatch({
                type: SET_FAVORITE_EPISODE_SUCCESS,
            });

        }).catch(() => {
            dispatch({type: SET_FAVORITE_EPISODE_ERROR})
        })
    }

}
export const removeFavoriteEpisodeAction = payload => {

    return dispatch => {
        
        dispatch({ type: REMOVE_FAVORITE_EPISODE_INIT });

        removeFavoriteEpisode(payload).then(response => {

            dispatch({
                type: REMOVE_FAVORITE_EPISODE_SUCCESS,
            });

        }).catch(() => {
            dispatch({type: REMOVE_FAVORITE_EPISODE_ERROR})
        })
    }

}


export const setFavoriteCharacterAction = payload => {

    return dispatch => {
        
        dispatch({ type: SET_FAVORITE_EPISODE_INIT });

        setFavoriteCharacter(payload).then(response => {
            dispatch({
                type: SET_FAVORITE_EPISODE_SUCCESS,
            });

        }).catch(() => {
            dispatch({type: SET_FAVORITE_EPISODE_ERROR})
        })
    }

}
export const removeFavoriteCharacterAction = payload => {

    return dispatch => {
        
        dispatch({ type: REMOVE_FAVORITE_EPISODE_INIT });

        removeFavoriteCharacter(payload).then(response => {

            dispatch({
                type: REMOVE_FAVORITE_EPISODE_SUCCESS,
            });

        }).catch(() => {
            dispatch({type: REMOVE_FAVORITE_EPISODE_ERROR})
        })
    }

}



export const getByIdAction = id => {
    return dispatch => {
        dispatch({ type: GET_USER_REQUEST });

        //call api
        getById(id)
            .then(                
                user => {
                    dispatch({ type: GET_USER_SUCCESS, payload: user })
                },
                error => dispatch({ type: GET_USER_FAILURE, payload: error.toString() })
            );
    };
}

export const getAllAction = () => {
    return dispatch => {
        dispatch({ type: GETALL_REQUEST });

        //call api
        getAll()
            .then(
                users => dispatch({ type: GETALL_SUCCESS, payload: users }),
                error => dispatch({ type: GETALL_FAILURE, payload: error.toString() })
            );
    };
}