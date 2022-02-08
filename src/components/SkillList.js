import React from 'react';
import styled from 'styled-components';

import skills from '../data/skills';
import Skill from './Skill';

const sortSkillsByYear = (a, b) => {
    if (a.years > b.years){
        return -1;
    }

    if (a.years < b.years){
        return 1;
    }
    return 0;
};

const SkillList = () => {
    return <StyledList>
        {skills.sort(sortSkillsByYear).map((skill, index) => <Skill key={index} skill={skill} />)}
    </StyledList>;
};

const StyledList = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1rem;

    @media screen and (max-width: 1250px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

export default SkillList;
