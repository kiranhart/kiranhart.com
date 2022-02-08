import React from 'react';
import styled from 'styled-components';

const Container = ({children}) => {
    return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
    width: 70%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1150px) {
        width: 100%;
    }
`;

export default Container;
