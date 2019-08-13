export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}

// export function authHeader() {
//     return { 'Authorization': 'Bearer -xN_h82PHVTCMA9vdoHrcZxH-x5mb11y1537t3rGzcM' };
// }