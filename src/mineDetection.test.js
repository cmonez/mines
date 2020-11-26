import { checkingMines, verifyGridPoint } from './MineLogic.js';

describe('Mine Checking logic', () => {
  let sampleGrid = [
    ['M', 0, 0, 'M', 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 'M', 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 'M', 0],
    [0, 0, 0, 0, 'M', 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 'M'],
    [0, 'M', 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 'M', 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 'M', 0, 'M', 0, 0, 0, 0, 0],
  ];

  let nextSampleGrid = [
    [0, 0, 0, 0, 0],
    [0, 'M', 0, 0, 0],
    [0, 0, 0, 0, 'M'],
    [0, 0, 0, 0, 'M'],
    ['M', 'M', 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];

  let fullMines = [
    ['M', 'M', 'M'],
    ['M', 'M', 'M'],
    ['M', 'M', 'M'],
  ];

  let twoMines = [
    [0, 'M', 'M'],
    ['M', 'M', 'M'],
    ['M', 'M', 'M'],
  ];

  const nullGridPoint = verifyGridPoint(sampleGrid, -1, 10);
  const validGridPoint = verifyGridPoint(sampleGrid, 0, 0);
  const checkingForOneMine = checkingMines(nextSampleGrid, 0, 0);
  const checkingForThreeMines = checkingMines(twoMines, 0, 0);
  const clickedMines = checkingMines(fullMines, 0, 0);

  let numberOfReveals = 0;
  for (let i = 0; i < clickedMines.length; i++) {
    let innerGrid = clickedMines[i];
    for (let j = 0; j < innerGrid.length; j++) {
      if (innerGrid[j] === 'REVEAL') {
        numberOfReveals++;
      }
    }
  }

  test('Expect to return a null when you give your function in invalid grid poin', () => {
    expect(nullGridPoint).toEqual(null);
  });

  test('Expect to grab the correct grid point given an x (horizontal) y (vertical) point', () => {
    expect(validGridPoint).toEqual('M');
  });

  test('Expect that when you click a grid with mines in any of the direcitons, the transformed grid reflects the number of surrounding mines', () => {
    expect(checkingForOneMine[0][0]).toEqual(1);
    expect(checkingForThreeMines[0][0]).toEqual(3);
  });

  test('Expect for the Ms in a grid to change depending on if it was the clicked mine to REDMINE and unclicked to REVEAL', () => {
    expect(clickedMines[0][0]).toEqual('REDMINE');
    expect(numberOfReveals).toEqual(8);
  });
});
