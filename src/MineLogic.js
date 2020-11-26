export const generateGridWithRandomlyPlacedMines = (
  gridSize,
  numberOfMines
) => {
  // let filledGrid = new Array(gridSize).fill(new Array(gridSize).fill(0));
  let filledGrid = new Array(gridSize)
    .fill(0)
    .map((ea) => new Array(gridSize).fill(0));

  while (numberOfMines) {
    let xCoordinate = randomNumInGrid(gridSize);
    let yCoordinate = randomNumInGrid(gridSize);
    if (filledGrid[xCoordinate][yCoordinate] === 0) {
      filledGrid[xCoordinate][yCoordinate] = 'M';
      numberOfMines--;
    }
  }
  return filledGrid;
  //
  function randomNumInGrid(gridSize) {
    return Math.floor(Math.random() * gridSize);
  }
};

export const checkingMines = (grid, xCoordinate, yCoordinate) => {
  let newGrid = grid.slice(0);
  let firstClickedPiece = verifyGridPoint(grid, xCoordinate, yCoordinate);
  if (firstClickedPiece === 'M') {
    alert('Game OVER');
    newGrid[yCoordinate][xCoordinate] = 'REDMINE';
    let revealedGrid = revealMines(newGrid);
    return revealedGrid;
  }
  if (firstClickedPiece !== 'M') {
    recursiveMineCheck(newGrid, xCoordinate, yCoordinate);
    return newGrid;
  }

  function recursiveMineCheck(feedGrid, xCoordinate, yCoordinate) {
    if (
      xCoordinate < 0 ||
      xCoordinate >= feedGrid[0].length ||
      yCoordinate >= feedGrid[0].length ||
      yCoordinate < 0
    ) {
      return;
    }

    let currentPoint = verifyGridPoint(feedGrid, xCoordinate, yCoordinate);
    //
    let bottomLeftCorner = verifyGridPoint(
      feedGrid,
      xCoordinate - 1,
      yCoordinate + 1
    );
    ///
    let leftSide = verifyGridPoint(feedGrid, xCoordinate - 1, yCoordinate);
    //
    let upperLeftCorner = verifyGridPoint(
      feedGrid,
      xCoordinate - 1,
      yCoordinate - 1
    );
    //
    let directlyOnTop = verifyGridPoint(feedGrid, xCoordinate, yCoordinate - 1);
    //
    let upperRightCorner = verifyGridPoint(
      feedGrid,
      xCoordinate + 1,
      yCoordinate - 1
    );
    //
    let rightSide = verifyGridPoint(feedGrid, xCoordinate + 1, yCoordinate);
    //
    let bottomRightCorner = verifyGridPoint(
      feedGrid,
      xCoordinate + 1,
      yCoordinate + 1
    );
    //
    let bottomSide = verifyGridPoint(feedGrid, xCoordinate, yCoordinate + 1);

    if (currentPoint === 'M') {
      console.log('Hit a mine!');
      return;
    }
    if (currentPoint === 'ND') {
      return;
    }
    if (
      upperRightCorner === 'M' ||
      directlyOnTop === 'M' ||
      upperLeftCorner === 'M' ||
      bottomSide === 'M' ||
      leftSide === 'M' ||
      rightSide === 'M' ||
      bottomRightCorner === 'M' ||
      bottomLeftCorner === 'M'
    ) {
      let minesPresent = countMinesSurroundingSquare(
        feedGrid,
        upperRightCorner,
        directlyOnTop,
        upperLeftCorner,
        bottomSide,
        leftSide,
        rightSide,
        bottomRightCorner,
        bottomLeftCorner
      );
      newGrid[yCoordinate][xCoordinate] = minesPresent;
      return;
    } else {
      newGrid[yCoordinate][xCoordinate] = 'ND';
      //
      recursiveMineCheck(feedGrid, xCoordinate - 1, yCoordinate + 1);
      ///
      recursiveMineCheck(feedGrid, xCoordinate - 1, yCoordinate);
      //
      recursiveMineCheck(feedGrid, xCoordinate - 1, yCoordinate - 1);
      //
      recursiveMineCheck(feedGrid, xCoordinate, yCoordinate - 1);
      //
      recursiveMineCheck(feedGrid, xCoordinate + 1, yCoordinate - 1);
      //
      recursiveMineCheck(feedGrid, xCoordinate + 1, yCoordinate);
      //
      recursiveMineCheck(feedGrid, xCoordinate + 1, yCoordinate + 1);
      //
      recursiveMineCheck(feedGrid, xCoordinate, yCoordinate + 1);
      return;
    }
  }

  function countMinesSurroundingSquare(grid, ...sides) {
    let surroundingMines = 0;
    let surroundingSides = [...sides];
    surroundingSides.forEach((gridLocation) => {
      if (gridLocation === 'M') {
        surroundingMines++;
      }
    });
    return surroundingMines;
  }

  function revealMines(grid) {
    let newGrid = grid.slice(0);
    for (let i = 0; i < newGrid.length; i++) {
      let innerBoard = newGrid[i];
      for (let j = 0; j < innerBoard.length; j++) {
        if (innerBoard[j] === 'M') {
          innerBoard[j] = 'REVEAL';
        }
      }
    }
    return newGrid;
  }
};

export function verifyGridPoint(grid, xCoordinate, yCoordinate) {
  if (
    xCoordinate < 0 ||
    xCoordinate >= grid[0].length ||
    yCoordinate >= grid[0].length ||
    yCoordinate < 0
  ) {
    return null;
  }
  return grid[yCoordinate][xCoordinate];
}
// Function to check that the grid point falls in the boundaries of the dimensions

// console.log('upperRightCorner', upperRightCorner);
// console.log('directlyOnTop', directlyOnTop);
// console.log('upperLeftCorner', upperLeftCorner);
// console.log('bottomSide', bottomSide);
// console.log('leftSide', leftSide);
// console.log('rightSide', rightSide);
// console.log('bottomRightCorner', bottomRightCorner);
// console.log('bottomLeftCOrner', bottomLeftCorner);
