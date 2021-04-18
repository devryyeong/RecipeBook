import styled from 'styled-components';
import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header.js';

const Styled= {
  body: styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  content: styled.div`
    width: 100%;
    height: 800px;
    padding: 400 0 200px 0;
    justify-content: center;
    align-items: center;
    background-color: #f3a683;
  `,
  title: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Baloo', cursive;
    font-size: 3.5rem;
    text-align: center;
  `,
  btn: styled.button`
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    line-height: 1rem;
    border: 1px solid;
    background: transparent;
    margin: 10px;
    font-family: 'Baloo', cursive;
    font-size: 1.0rem;
    text-align: center;
  `,
  BtnWrap : styled.div`
    display: flex;
    flex-direction: row;
    padding: 30px;
  `
};

function HomePage(){
  return (
    <div>
    <Header/>
      <Styled.body>
        <Styled.content>
          <Styled.title>My Special Recipe Book
              <Styled.BtnWrap>
                <Styled.btn>
                    <Link to="add">Add Recipe</Link>
                </Styled.btn>
                <Styled.btn>
                    <Link to="category">Category</Link>
                </Styled.btn>
              </Styled.BtnWrap>
          </Styled.title>
        </Styled.content>
      </Styled.body>
    </div>

  );
}

export default HomePage;