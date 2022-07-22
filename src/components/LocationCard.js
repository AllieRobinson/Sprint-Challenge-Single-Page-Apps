import React from "react";
import styled from 'styled-components';

const CardDiv = styled.div`
display: inline-block;
width: 500px;
height: auto;
margin: 20px;
padding: 20px;
background-color: rgba(189, 195, 199, 0.9);
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.29);
`

const WhiteDiv = styled.div`
background-color: #F5F5F5;
padding: 10px;
overflow: auto;
height: auto;
`

const StyledP = styled.p`
font-family: monospace;
font-size: 1rem;
line-height: 10px;
`

const StyledH2 = styled.h2`
font-family: monospace;
font-size: 1.8rem;
`

export default function LocationCard(props) {
  return (
    <CardDiv key={props.location.name}>
      <WhiteDiv>
        <StyledH2>{props.location.name}</StyledH2>
        <StyledP>Type: {props.location.type}</StyledP>
        <StyledP>Dimension: {props.location.dimension}</StyledP>
      </WhiteDiv>
  </CardDiv>
  )
}
