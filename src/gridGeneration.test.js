import {
  generateGridWithRandomlyPlacedMines,
  checkingMines,
} from './MineLogic.js';

describe('Grid generation logic', () => {
  let numberOfMines = 0;
  let grid = generateGridWithRandomlyPlacedMines(10, 10);
  for (let i = 0; i < grid.length; i++) {
    let innerGrid = grid[i];
    for (let j = 0; j < innerGrid.length; j++) {
      if (innerGrid[j] === 'M') {
        numberOfMines++;
      }
    }
  }
  test('Grid size to be of 10 * 10 size', () => {
    expect(grid[0].length).toEqual(10);
    expect(grid.length).toEqual(10);
  });
  test('The number of mines to exist to be 10', () => {
    expect(numberOfMines).toEqual(10);
  });
});
