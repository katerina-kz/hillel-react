import { combineReducers } from 'redux';
import gistReducer from './gists';
import gistFilesReducer from "./files";

export default combineReducers({
    gists: gistReducer,
    files: gistFilesReducer,
})