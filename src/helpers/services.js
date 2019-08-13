

export const config = {
    apiUrl: 'http://localhost:4000'
}


export const handleResponse = response => {
    return response.text().then(text => {
        console.log(text)
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api

                // logout();
                localStorage.removeItem('user');
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}