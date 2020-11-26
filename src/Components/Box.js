import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { validateBoard } from './Actions/ReduxActions';
const imageUrl = `${process.env.PUBLIC_URL}/minesweeper_assets_png`;

const GridItem = styled.div`
  height: 10%;
  width: 10%;
  box-shadow: 0px 0px 0px 1px black inset;
  background-color: ${(props) =>
    props.primary ? props.primary : 'rgb(201, 194, 193)'};
  background-image:url('${imageUrl}/board_blank_unclicked.png');
  text-align: center;
`;

const GridText = styled.div`
  height: 100%;
  width: 100%;
  /* background-image: url('${imageUrl}/board_01.png'); */
  /* Valid sender */
  /* background-image: ${(props) =>
    typeof props.image === 'number'
      ? `url(${props.url}/board_0${props.image}.png)`
      : `url(${props.url}/board_blank_clicked.png)`}; */
  background-image: ${(props) => {
    if (typeof props.image === 'number') {
      return `url(${props.url}/board_0${props.image}.png)`;
    }
    if (props.image === 'ND') {
      return `url(${props.url}/board_blank_clicked.png)`;
    }
    if (props.image === 'REDMINE') {
      return `url(${props.url}/board_mine_red.png)`;
    }
    if (props.image === 'REVEAL') {
      return `url(${props.url}/board_mine_gray.png)`;
    }
  }}
`;

const Box = (props) => {
  const dispatch = useDispatch();
  return (
    <GridItem
      onClick={() => {
        dispatch(validateBoard(props.xCoordinate, props.yCoordinate));
      }}
    >
      {props.gridRepresentation === 0 ||
      props.gridRepresentation === 'M' ? null : (
        <GridText image={props.gridRepresentation} url={imageUrl}></GridText>
      )}
    </GridItem>
  );
};

export default Box;

/* background-image: url(${(props) => 'url(imageUrl / props.gridRepresentation)}'); */
