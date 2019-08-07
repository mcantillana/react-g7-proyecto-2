import {
    GET_CHARACTERS_INIT,
    GET_CHARACTERS_SUCCESS,
    GET_CHARACTERS_ERROR 
} from './const';

import { getCharacters } from './api';


export const getCharactersAction = url => {

    const _url = url || 'https://rickandmortyapi.com/api/character';

    return dispatch => {
        
        dispatch({
            type: GET_CHARACTERS_INIT
        });

        getCharacters(_url).then(response => {
            dispatch({
                type: GET_CHARACTERS_SUCCESS,
                payload: response.data
            });

        }).catch(() => {
            dispatch({type: GET_CHARACTERS_ERROR})
        })
    }
}


