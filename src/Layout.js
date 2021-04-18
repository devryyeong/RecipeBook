import React from 'react';
import styled from 'styled-components';

const Wrapper= styled.div`
    padding-top: 60px;
    display: flex;
    flex-flow: row nowrap;
    width: 100vw;
`;

const Layout = ({children})=>(
    <Wrapper>
        {children}
    </Wrapper>
);

Layout.Main= {
    main: styled.div`
        flex: 1;
        height: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: purple;
        font-family: 'Baloo';
        font-size: 3.5rem;
        text-align: center;
    `,
    sub: styled.div`
        font-family: 'Baloo';
        font-size: 1.5rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `
};

Layout.Sidebar= styled.button`
    flex: 0 auto;
    width: 200px;
    background-color: green;
    display: flex;
    flex-direction: column;

    align-items: flex-start;
    padding: 50px 20px 50px 20px;
`;

export default Layout;