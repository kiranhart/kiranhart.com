import React from 'react';
import styled from 'styled-components';
import ProjectList from '../components/ProjectList';
import Container from '../components/Container';

const Projects = () => {
    return <Container>
        <InnerContainer>
            <h1>Projects</h1>
            <hr />
            <ProjectList />
        </InnerContainer>
    </Container>;
};



const InnerContainer = styled.div`
    width: 70%;
    margin: 0 auto;
    margin-top: 2rem;
    letter-spacing: 0.025rem;
    line-height: 1.5;
    margin-bottom: 2rem;

    h1 {
        font-size: 2rem;
        font-weight: 400
    }

    hr {
        margin: 2rem 0;
    }

    @media screen and (max-width: 1150px) {
        width: 100%;
        padding: 1rem 1rem;
    }
`;


export default Projects;
