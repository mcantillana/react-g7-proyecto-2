// import axios from 'axios';

import { handleResponse, authHeader, config } from '../../helpers';

export const setFavoriteEpisode = payload => {
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload
    };

    return fetch(`${config.apiUrl}/user/episode/favorite`, requestOptions).then(handleResponse);
}


export const removeFavoriteEpisode = payload => {
    
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: payload
    };

    return fetch(`${config.apiUrl}/user/episode/favorite`, requestOptions).then(handleResponse);
}


export const setFavoriteCharacter = payload => {
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload
    };

    return fetch(`${config.apiUrl}/user/character/favorite`, requestOptions).then(handleResponse);
}


export const removeFavoriteCharacter = payload => {
    
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: payload
    };

    return fetch(`${config.apiUrl}/user/character/favorite`, requestOptions).then(handleResponse);
}

export const getAll = () => {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

export const getById = id => {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users/${id}`, requestOptions)
    .then(
        response => {
            const text = response.text();
            const data = text && JSON.parse(text);
            if (!response.ok) {
                if (response.status === 401) {
                    localStorage.removeItem('user');
                    window.location.reload(true);
                }

                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }

            return data;
        }
    )
    

}

