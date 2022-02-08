import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode, setLightMode } from '../store/actions/themeActions';

import moonImage from '../assets/moon.svg';
import sunImage from '../assets/sun.svg';

const ThemeToggle = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.theme);

    const toggleTheme = () => {
        dispatch(theme === 'light' ? setDarkMode() : setLightMode());
    };

    return <StyledThemeToggle>
        {theme === 'light' && <img src={moonImage} alt='moon' onClick={toggleTheme} />}
        {theme === 'dark' && <img src={sunImage} alt='sun' onClick={toggleTheme} />}
    </StyledThemeToggle>;
};

const StyledThemeToggle = styled.div`
    position: fixed;
    z-index: 100;
    bottom: 1rem;
    right: 1rem;
    width: 3.5rem;

    &:hover {
        cursor: pointer;
    }
`;


export default ThemeToggle;