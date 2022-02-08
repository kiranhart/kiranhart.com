import React from 'react';
import styled from 'styled-components';
import SkillList from '../components/SkillList';
import Container from '../components/Container';

const About = () => {
    return <Container>
        <InnerContainer>
            <div className="bio">
                <h1 className='me'>About Me</h1>
                <p className='aboutme-bio'>
                My name is <strong>Kiran Hart</strong>, and I am a software developer based in the <strong>Greater Toronto Area</strong>.
                I graduated from <strong>Sheridan College</strong> in 2021, and I am currently working on my portfolio and looking for new opportunities.
                I have a passion for creating and building things that will be useful to others. 
                I often develop plugins that will be used on SpigotMC servers when I'm not working on my portfolio.
                </p>
            </div>
            <hr />
            <div className="skills">
                <h1 className='me'>Skills</h1>
                <br />
                <SkillList />
            </div>
            <hr />
        </InnerContainer>
    </Container>;
};


const InnerContainer = styled.div`
    hr {
        margin: 2rem 0;
    }

    width: 70%;
    margin: 0 auto;
    margin-top: 2rem;
    letter-spacing: 0.025rem;
    line-height: 1.5;

    h1.me {
        font-size: 2rem;
        font-weight: 400
    }

    p.aboutme-bio {
        margin-top: 1rem;
        font-size: 1.1rem;
        font-weight: 300;
    }

    .subhead {
        font-size: 1.1rem;
        font-weight: 400;
    }

    @media screen and (max-width: 1150px) {
        width: 100%;
        padding: 1rem 1rem;
    }

`;

export default About;
