// import {
//     GET_EPISODES_INIT,
//     GET_EPISODES_SUCCESS,
//     GET_EPISODES_ERROR 
// } from './const';

// import { getEpisodes } from './api';


// export const getEpisodesAction = url => {

//     const _url = url || 'https://rickandmortyapi.com/api/episode';

//     return dispatch => {
        
//         dispatch({
//             type: GET_EPISODES_INIT
//         });

//         getEpisodes(_url).then(response => {
//             dispatch({
//                 type: GET_EPISODES_SUCCESS,
//                 payload: response.data
//             });

//         }).catch(() => {
//             dispatch({type: GET_EPISODES_ERROR})
//         })
//     }
// }


