import {
  verifyGridPoint,
  checkingMines,
  generateGridWithRandomlyPlacedMines,
} from '../../MineLogic.js';

const boardCheckReducer = (
  state = generateGridWithRandomlyPlacedMines(10, 10),
  action
) => {
  switch (action.type) {
    case 'VALIDATE_BOARD':
      return checkingMines(state, action.xCoordinate, action.yCoordinate);
    default:
      return state;
  }
};

export default boardCheckReducer;
