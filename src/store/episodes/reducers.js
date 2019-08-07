import { INIT_STATE } from './initialState';
import {
    GET_EPISODES_INIT,
    GET_EPISODES_SUCCESS,
    GET_EPISODES_ERROR 
} from './const';


export default function reducer(state = INIT_STATE, action) {
    
    switch(action.type) {
        case GET_EPISODES_INIT:
            return {
                ...state,
                episodes: {
                    ...state.episodes,
                    loading: true
                }
            }
        case GET_EPISODES_SUCCESS:
            return {
                ...state,
                episodes: {
                    ...state.episodes,
                    loading: false,
                    data: state.episodes.data.concat(action.payload.results),
                    info: action.payload.info,
                }      
            }

        case GET_EPISODES_ERROR:
            return {
                ...state,
                episodes: {
                    ...state.episodes,
                    loading: false,
                    error: true
                }
            }
        // case GET_EPISODES_LOAD_MORE:
        //     return {
        //         ...state,
        //         episodes: {
        //             ...state.episodes,
        //             loading: false,
        //             data: action.payload.results,
        //             info: action.payload.info,
        //         }      
        //     }

        default:
            return state;
    }
}
