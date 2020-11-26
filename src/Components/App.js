import React from 'react';
import Grid from './Grid';
import styled from 'styled-components';
import {
  verifyGridPoint,
  checkingMines,
  generateGridWithRandomlyPlacedMines,
} from '../MineLogic.js';
const HeaderContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const App = () => {
  return (
    <div className="App">
      <HeaderContainer>
        <h1>Minesweeper!</h1>
      </HeaderContainer>
      <Grid />
    </div>
  );
};

export default App;
