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
    `,
    inputBox: styled.div`
      width: 100%;
      height: 50px;
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      margin: 10px;
      font-family: 'Baloo', normal;
      font-size: 1.5rem;
      text-align: center;
    `,
    btnWrap: styled.div`
      display: flex;
      flex-direction: row;
      padding: 20px;
      `
};

const AddRecipe=(props)=>{
    const moveHandler=()=>{
        window.moveTo("AddRecipe", )
    }
    return (
      <div>
      <Header/>
        <Styled.content>
          <Styled.inputBox>
            <h4>[Edit Recipe]</h4>
            <div>MENU: </div>
            <input type="text" size="70" placeholder="메뉴 이름" required></input>

            <div>MATERIAL: </div>
            <input type="text" size="70" placeholder="재료"></input>
            <div>TIME: </div>
            <input type="text" size="70" placeholder="소요 시간"></input>
            <div>KEY POINT: </div>
            <input type="text" size="70" placeholder="Key Point" style={{lineHeight: 10}}></input>
            <div>RECIPE: </div>
            <input type="text" size="70" placeholder="레시피" style={{lineHeight: 20}}></input>

            <Styled.btnWrap>
              <input type="submit" value="저장"></input>
              <input type="reset" value="리셋"></input>
            </Styled.btnWrap>

          </Styled.inputBox>
        </Styled.content>
        </div>
    )
}
export default AddRecipe;