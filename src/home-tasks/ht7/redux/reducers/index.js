import { combineReducers } from 'redux';
import gistReducer from './gists';
import gistFilesReducer from "./files";
import gistFollowersReducer from "./followers";

export default combineReducers({
    gists: gistReducer,
    files: gistFilesReducer,
    followers: gistFollowersReducer,
})