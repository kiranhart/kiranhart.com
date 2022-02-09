import React from 'react';
import styled from 'styled-components';

import ME from '../assets/me.jpg';

const Home = () => {
    return  <Container>
        <img src={ME} alt="pfp" />
        <h2>Kiran Hart</h2>
        <h4>Software Developer</h4>
        <br />
        <div className="quickLinks">
            <a target="_blank" rel="noreferrer" href="https://github.com/kiranhart">Github</a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kiranhart/">LinkedIn</a>
            <a target="_blank" rel="noreferrer" href="https://www.spigotmc.org/resources/authors/kiranhart.99189/">Spigot</a>
        </div>
    </Container>
    ;
};

const Container = styled.div`
    width: 70%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    img {
        width: 160px;
        border-radius: 50%;
        margin-bottom: 1.5rem;
    }

    h2 {
        font-size: 3rem;
        font-weight: 400;
        letter-spacing: 0.1rem;
    }

    h4 {
        font-size: 1.3rem;
        opacity: 0.8;
        font-weight: 300;
        letter-spacing: 0.1rem;
    }

    .quickLinks {
        margin-top: 2rem;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        gap: 1rem;



        @media (max-width: 2000px) {
            width: 30%;
        }

        @media (max-width: 1150px) {
            width: 50%;

        }

        @media (max-width: 750px) {
            width: 100%;
        }
    }

    .quickLinks a { 
        transition: all 0.25s linear;

        text-decoration: none;
        border: 1px solid ${({ theme }) => theme.text};

        &:hover {
            background: ${({ theme }) => theme.text};
            color: ${({ theme }) => theme.body};
        }

        padding: 0.7rem 1rem;
        color: ${({ theme }) => theme.text};
    }
`;

export default Home;
