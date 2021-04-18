import React from 'react';
import styled from 'styled-components';
import Header from './Header.js';

const Styled= {
    content: styled.div`
      width: 100%;
      height: 800px;
      padding: 450px 0 500px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #f3a683;
    `
};

const Category=(props)=>{
    const moveHandler=()=>{
        window.moveTo("Category", )
    }
    return (
        <div>
            <Header/>
            <Styled.content>aa</Styled.content>
        </div>
    )
}

export default Category;