export const validateBoard = (xCoordinate, yCoordinate) => {
  return {
    type: 'VALIDATE_BOARD',
    xCoordinate,
    yCoordinate,
  };
};
