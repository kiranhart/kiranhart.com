import {types} from '../actions/themeActions';

const reducer = (state = { theme: 'dark' }, action) => {
    switch (action.type) {
    case types.SET_LIGHT_MODE:
        return { theme: 'light' };
    case types.SET_DARK_MODE:
        return { theme: 'dark' };
    default:
        return state;
    }
};

export default reducer;