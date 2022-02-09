import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import useFetchMetrics from '../hooks/useFetchMetrics';

const ProjectItem = ({project}) => {
    const darkmode = useSelector((state) => state.theme.theme === 'dark');
    const fetchMetrics = useFetchMetrics(project.bStats);

    const imageClick = () => {
        window.open(project.livePreview, '_blank');
    };

    return <ProjectItemWrapper darkmode={darkmode}>
        <img src={project.image} alt={project.name} className={project.type === 'Website' ? '' : 'plugin-image'} onClick={imageClick} />
        <div className='content'>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <div className='primary-language'>{project.primaryLanguage}</div>
            {project.type === 'Website' && <ul className="built-with">
                {project.builtWith.map((builtWith, index) => {
                    return <li key={builtWith + index}>{builtWith}</li>;
                })}
            </ul>}

            {project.type === 'Plugin' && <div className="metrics">
                <p>Servers: <strong>{fetchMetrics.servers}</strong></p>
                <p>Players: <strong>{fetchMetrics.players}</strong></p>
            </div>}

            <hr />
            <div className='links'>
                {project.type === 'Website' && <a href={project.livePreview} target='_blank' rel='noopener noreferrer'>Preview</a>}
                {project.type === 'Plugin' && <a href={project.livePreview} target='_blank' rel='noopener noreferrer'>Spigot</a>}
                <a href={project.github} target='_blank' rel='noopener noreferrer'>Github</a>
            </div>
        </div>
    </ProjectItemWrapper>;
};

const ProjectItemWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    -webkit-box-shadow: 5px 5px 5px 4px rgba(0,0,0,0.22); 
    box-shadow: 2px 2px 5px 4px rgba(0,0,0, 0.12);
    padding: 1rem;
    
    ${({darkmode}) => darkmode && `
        backdrop-filter: brightness(5%);
    `};

    img {
        width: 100%;
        transition: all 0.3s ease-in-out;
        flex: 1;
        object-fit: cover;

        &:hover {
            opacity: 0.5;
            transform: scale(1.02);
            cursor: pointer;
        }

    }

    .plugin-image {
            width: 15%;
            margin: 0 auto;
            aspect-ratio: 1 / 1;
    }

    .metrics {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        margin-top: 1rem;

        > p {
            font-size: 1rem;
            margin-top: 0.4rem;
            background-image: radial-gradient( circle farthest-corner at -3.7% -5%,  rgba(113,213,225,1) 0.3%, rgba(73,146,226,1) 90.5% );
            padding: 0.2rem 1rem;
            border-radius: 25px;
            color: white;
        }
    }

    .content {

        padding: 1rem 0;

        .primary-language {
            display: inline-flex;
            margin-top: 1rem;
            font-size: 1rem;
            background-image: linear-gradient( 109.6deg,  rgba(209,0,116,1) 11.2%, rgba(110,44,107,1) 91.1% );
            padding: 0.2rem 1rem;
            border-radius: 25px;
            color: white;
        }
    }

    ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem 0.7rem;
        margin-top: 1rem;

        li {
            font-size: 1rem;
            margin-top: 0.4rem;
            background-image: radial-gradient( circle farthest-corner at -3.7% -5%,  rgba(113,213,225,1) 0.3%, rgba(73,146,226,1) 90.5% );
            padding: 0.2rem 1rem;
            border-radius: 25px;
            color: white;
        }
    }

    .links {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;

       > a {
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
    }
`;

export default ProjectItem;
