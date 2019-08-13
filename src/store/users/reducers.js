import { INIT_STATE } from './initialState';
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


export default function reducer(state = INIT_STATE, action) {
    
    switch(action.type) {
        case GET_USER_REQUEST:
          return {
            ...state,
            loading: true
          };
        case GET_USER_SUCCESS:

          return {
            ...state,
            loading: false,
            user: action.payload
          };
        case GET_USER_FAILURE:
          return { 
            ...state,
            loading: false,
            error: action.error
          };

        case SET_FAVORITE_EPISODE_INIT:
            return {
              ...state, 
              loading_set_favorite: true 
            };
        case SET_FAVORITE_EPISODE_SUCCESS:
            return {
              ...state,
              loading_set_favorite: false,

            };
        
        case SET_FAVORITE_EPISODE_ERROR:
            return {
              ...state,
              loading_set_favorite: false,
              error: true,
            };


        case REMOVE_FAVORITE_EPISODE_INIT:
            return {
              ...state, 
              loading_set_favorite: true 
            };
        case REMOVE_FAVORITE_EPISODE_SUCCESS:
            return {
              ...state,
              loading_set_favorite: false,

            };
        
        case REMOVE_FAVORITE_EPISODE_ERROR:
            return {
              ...state,
              loading_set_favorite: false,
              error: true,
            };

        case SET_FAVORITE_CHARACTER_INIT:
            return {
              ...state, 
              loading_set_favorite: true 
            };
        case SET_FAVORITE_CHARACTER_SUCCESS:
            return {
              ...state,
              loading_set_favorite: false,

            };
        
        case SET_FAVORITE_CHARACTER_ERROR:
            return {
              ...state,
              loading_set_favorite: false,
              error: true,
            };


        case REMOVE_FAVORITE_CHARACTER_INIT:
            return {
              ...state, 
              loading_set_favorite: true 
            };
        case REMOVE_FAVORITE_CHARACTER_SUCCESS:
            return {
              ...state,
              loading_set_favorite: false,

            };
        
        case REMOVE_FAVORITE_CHARACTER_ERROR:
            return {
              ...state,
              loading_set_favorite: false,
              error: true,
            };

        default:
            return state;
    }
}
