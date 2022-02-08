import { combineReducers } from 'redux';
import themeReduer from './themeReducer';

export default combineReducers({
    theme: themeReduer
});