import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    return <StyledNavbarOutter>
        <StyledNavbar>
            <h3><Link to="/">Kiran Hart</Link></h3>
            <ul>
                <NavLink to="/" className={(data) => data.isActive ? 'active-link' : ''}>Home</NavLink>
                <NavLink to="/about" className={(data) => data.isActive ? 'active-link' : ''}>About</NavLink>
                <NavLink to="/projects" className={(data) => data.isActive ? 'active-link' : ''}>Projects</NavLink>
                <NavLink to="/contact" className={(data) => data.isActive ? 'active-link' : ''}>Contact</NavLink>
            </ul>
        </StyledNavbar>
        <hr />
    </StyledNavbarOutter>;
};

const StyledNavbarOutter = styled.div`
    width: 70%;
    margin: 0 auto;

    @media screen and (max-width: 1150px) {
        width: 100%;
    }

    hr {
        width: 70%;
        margin: 0 auto;
        opacity: 0.5;    

        @media screen and (max-width: 1150px) {
            width: 100%;
        }
    }
`;

const StyledNavbar = styled.nav`
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 1rem 1rem;

    @media (max-width: 1150px) {
        width: 100%;
        padding: 1rem 2rem;
    }

    ul {
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;

        @media (max-width: 1150px) {
            gap: 1rem;
        }
    }
`;

export default Navbar;
