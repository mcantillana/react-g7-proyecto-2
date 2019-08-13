// array in local storage for registered users
let users = JSON.parse(localStorage.getItem('users')) || [];
    
export function configureFakeBackend() {
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(() => {

                // authenticate
                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    // get parameters from post request
                    let params = JSON.parse(opts.body);

                    // find if any user matches login credentials
                    let filteredUsers = users.filter(user => {
                        return user.username === params.username && user.password === params.password;
                    });

                    if (filteredUsers.length) {
                        // if login details are valid return user details and fake jwt token
                        let user = filteredUsers[0];
                        let responseJson = {
                            id: user.id,
                            username: user.username,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            token: 'fake-jwt-token'
                        };
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                    } else {
                        // else return error
                        reject('Username or password is incorrect');
                    }

                    return;
                }

                // get users
                if (url.endsWith('/users') && opts.method === 'GET') {
                    // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(users))});
                    } else {
                        // return 401 not authorised if token is null or invalid
                        reject('Unauthorised');
                    }

                    return;
                }

                // get user by id
                if (url.match(/\/users\/\d+$/) && opts.method === 'GET') {
                    // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        // find user by id in users array
                        let urlParts = url.split('/');
                        let id = parseInt(urlParts[urlParts.length - 1]);
                        let matchedUsers = users.filter(user => { return user.id === id; });
                        let user = matchedUsers.length ? matchedUsers[0] : null;
                        
                        user = {
                            "favoriteCharacters": user.favoriteCharacters,
                            "favoriteEpisodes": user.favoriteEpisodes,
                            "id": user.id,
                        }
                        // respond 200 OK with user
                        resolve({ ok: true, text: () => JSON.stringify(user)});
                    } else {
                        // return 401 not authorised if token is null or invalid
                        reject('Unauthorised');
                    }

                    return;
                }

                // register user
                if (url.endsWith('/users/register') && opts.method === 'POST') {
                    // get new user object from post body
                    let newUser = JSON.parse(opts.body);
                    
                    // validation
                    let duplicateUser = users.filter(user => { return user.username === newUser.username; }).length;
                    if (duplicateUser) {
                        reject('Username "' + newUser.username + '" is already taken');
                        return;
                    }

                    // save new user
                    newUser.id = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1;
                    users.push(newUser);
                    localStorage.setItem('users', JSON.stringify(users));
                    
                    // respond 200 OK
                    resolve({ ok: true, text: () => Promise.resolve() });

                    return;
                }


                // add favorite episode 
                if (url.endsWith('/user/episode/favorite') && opts.method === 'POST') {
                    // console.log('body: ', opts.body)

                    // get new user object from post body
                    let payload = opts.body;
                   
                    for (let i = 0; i < users.length; i++) {

                        if (payload.user_id === users[i].id) {
                            
                            if (users[i].favoriteEpisodes.includes(payload.episode_id) === false) {
                                users[i].favoriteEpisodes.push(
                                    payload.episode_id
                                )
                            }

                        }
                    }

                    localStorage.setItem('users', JSON.stringify(users))
                    
                    // respond 200 OK
                    resolve({ ok: true, text: () => Promise.resolve() });

                    return;
                }


                // add favorite episode 
                if (url.endsWith('/user/episode/favorite') && opts.method === 'DELETE') {

                    // get new user object from post body
                    let payload = opts.body;

                    for (let i = 0; i < users.length; i++) {

                        if (payload.user_id === users[i].id) {
                            users[i].favoriteEpisodes = users[i].favoriteEpisodes.filter(favorite =>
                                favorite !== payload.episode_id
                            )
                        }
                    }

                    localStorage.setItem('users', JSON.stringify(users))
                    
                    // respond 200 OK
                    resolve({ ok: true, text: () => Promise.resolve() });

                    return;
                }


                // add favorite episode 
                if (url.endsWith('/user/character/favorite') && opts.method === 'POST') {
                    // console.log('body: ', opts.body)

                    // get new user object from post body
                    let payload = opts.body;
                   
                    for (let i = 0; i < users.length; i++) {

                        if (payload.user_id === users[i].id) {
                            
                            if (users[i].favoriteCharacters.includes(payload.episode_id) === false) {
                                users[i].favoriteCharacters.push(
                                    payload.character_id
                                )
                            }

                        }
                    }

                    localStorage.setItem('users', JSON.stringify(users))
                    
                    // respond 200 OK
                    resolve({ ok: true, text: () => Promise.resolve() });

                    return;
                }


                // add favorite episode 
                if (url.endsWith('/user/character/favorite') && opts.method === 'DELETE') {

                    // get new user object from post body
                    let payload = opts.body;

                    for (let i = 0; i < users.length; i++) {

                        if (payload.user_id === users[i].id) {
                            users[i].favoriteCharacters = users[i].favoriteCharacters.filter(favorite =>
                                favorite !== payload.character_id
                            )
                        }
                    }

                    localStorage.setItem('users', JSON.stringify(users))
                    
                    // respond 200 OK
                    resolve({ ok: true, text: () => Promise.resolve() });

                    return;
                }


                // delete user
                if (url.match(/\/users\/\d+$/) && opts.method === 'DELETE') {
                    // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        // find user by id in users array
                        let urlParts = url.split('/');
                        let id = parseInt(urlParts[urlParts.length - 1]);
                        for (let i = 0; i < users.length; i++) {
                            let user = users[i];
                            if (user.id === id) {
                                // delete user
                                users.splice(i, 1);
                                localStorage.setItem('users', JSON.stringify(users));
                                break;
                            }
                        }

                        // respond 200 OK
                        resolve({ ok: true, text: () => Promise.resolve() });
                    } else {
                        // return 401 not authorised if token is null or invalid
                        reject('Unauthorised');
                    }

                    return;
                }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
}