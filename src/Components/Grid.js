import React from 'react';
import Box from './Box';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
const Container = styled.div`
  width: 100%;
  text-align: center;
`;

const GridLayout = styled.div`
  display: inline-block;
  height: 600px;
  width: 600px;
  flex-direction: row;
`;

const GridBox = styled.div`
  display: flex;
  background-color: rgb(238, 201, 240);
  height: 100%;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Grid = () => {
  const gridLayout = useSelector((state) => state.validateBoard);
  const boxesPerRow = gridLayout[0].length;

  // greate an iterable array of arrays that represent
  // dimensions
  let filledGrid = new Array(boxesPerRow)
    .fill(0)
    .map((ea) => new Array(boxesPerRow).fill(0));
  // init a coordinates array which will have all coordinates in a flat sequential array
  let coordinates = [];
  for (let i = 0; i < filledGrid.length; i++) {
    // nested for-loop to push all coordinates into the array
    let innerGrid = filledGrid[i];
    for (let j = 0; j < innerGrid.length; j++) {
      coordinates.push([i, j, gridLayout[i][j]]);
      // gridLayout[i][j] represents the coordinate in the state
      // object for that point!
      // pushing [[0,0, M || 0], [0,0]..... [9,9]]
    }
  }
  let Boxes = coordinates.map((el) => (
    // use the x and y coordinate to send as props to each box
    <Box yCoordinate={el[0]} xCoordinate={el[1]} gridRepresentation={el[2]} />
  ));

  return (
    <Container id="container">
      <GridLayout id="grid">
        <GridBox>{Boxes}</GridBox>
      </GridLayout>
    </Container>
  );
};

export default Grid;
