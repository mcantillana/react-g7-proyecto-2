import { combineReducers } from 'redux';
import episodes from './episodes/reducers';
import characters from './characters/reducers';
import auth from './auth/reducers';



export default combineReducers({
    episodes,
    characters,
    auth
});