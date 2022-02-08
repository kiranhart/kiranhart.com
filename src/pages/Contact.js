import React from 'react';
import Container from '../components/Container';
import styled from 'styled-components';

const Contact = () => {
    return <Container>
        <InnerContainer>
            <h1>Contact</h1>
            <hr />  
            <div className='contact'>
                <h2>Email</h2>
                <h3>kiran.hart@live.com</h3>
            </div>
  
            <div className='contact'>
                <h2>LinkedIn</h2>
                <h3><a href="https://www.linkedin.com/in/kiranhart/">https://www.linkedin.com/in/kiranhart/</a></h3>
            </div>

            <div className='contact'>
                <h2>Discord</h2>
                <h3>Kiran#0002</h3>
            </div>
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
    text-align: center;

    .contact {
        margin-bottom: 2rem;

        h2 {
            font-size: 1.5rem;
            font-weight: 600;
        }

        h3 {
            font-size: 1.25rem;
            font-weight: 400;
        }
    }

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


export default Contact;
