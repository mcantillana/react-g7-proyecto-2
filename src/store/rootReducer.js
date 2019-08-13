import { combineReducers } from 'redux';
import episodes from './episodes/reducers';
import characters from './characters/reducers';
import auth from './auth/reducers';
import registration from './registration/reducers';
import users from './users/reducers';



export default combineReducers({
    episodes,
    characters,
    registration,
    auth,
    users
});