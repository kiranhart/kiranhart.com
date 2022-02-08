import React from 'react';
import styled from 'styled-components';

const Skill = ({skill}) => {

    return <StyledSkill>
        <h1>{skill.name}</h1>
        <p>{`${skill.years} ${skill.years > 1 ? 'Years' : 'Year'}`}</p>
    </StyledSkill>;
};

const StyledSkill = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;

    > h1 {
        font-size: 1.4rem;
        font-weight: 600;
    }

    p {
        font-size: 1rem;
        font-weight: 300;
    }
`;

export default Skill;
