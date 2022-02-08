export const types = {
    SET_LIGHT_MODE: 'SET_LIGHT_MODE',
    SET_DARK_MODE: 'SET_DARK_MODE'
};

export const setDarkMode = () => ({
    type: types.SET_DARK_MODE,
    theme: 'dark'
});

export const setLightMode = () => ({
    type: types.SET_LIGHT_MODE,
    theme: 'light'
});