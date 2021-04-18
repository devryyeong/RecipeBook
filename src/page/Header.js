import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    top: 0px;
    z-index: 5;
    background-color: #f5cd79;
    font-size: 2.5rem;
    color: white;
    font-family: 'Baloo', cursive;
`;

const Header = () => {
    return (
        <div>
        <Wrapper>
            <a style={{textDecoration: 'none', color:'black'}} href="./">RECIPE BOOK</a>
        </Wrapper>
        </div>
    )
};

export default Header;