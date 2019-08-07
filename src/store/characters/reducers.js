import { INIT_STATE } from './initialState';
import {
    GET_CHARACTERS_INIT,
    GET_CHARACTERS_SUCCESS,
    GET_CHARACTERS_ERROR 
} from './const';


export default function reducer(state = INIT_STATE, action) {
    
    switch(action.type) {
        case GET_CHARACTERS_INIT:
            return {
                ...state,
                characters: {
                    ...state.characters,
                    loading: true
                }
            }
        case GET_CHARACTERS_SUCCESS:
            return {
                ...state,
                characters: {
                    ...state.characters,
                    loading: false,
                    data: state.characters.data.concat(action.payload.results),
                    info: action.payload.info,
                }      
            }

        case GET_CHARACTERS_ERROR:
            return {
                ...state,
                characters: {
                    ...state.characters,
                    loading: false,
                    error: true
                }
            }

        default:
            return state;
    }
}
