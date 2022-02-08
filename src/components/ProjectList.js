import React from 'react';
import styled from 'styled-components';
import projects from '../data/projects';
import ProjectItem from './ProjectItem';

const ProjectList = () => {
    return <StyledProjectList>
        {projects.map((project, index) => {
            return <ProjectItem key={project.name + index} project={project}/>;
        })}
    </StyledProjectList>;
};

const StyledProjectList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;

    grid-gap: 1rem;

    @media screen and (max-width: 1150px) {
        grid-template-columns: 1fr;
    }

`;

export default ProjectList;
