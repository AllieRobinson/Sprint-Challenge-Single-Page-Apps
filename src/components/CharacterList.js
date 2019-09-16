import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from 'styled-components';

const CardDiv = styled.div`
display: inline-block;
width: 360px;
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

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

    const [characters, setCharacters] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () => {
        axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          setCharacters(response.data.results)
          console.log("character", response.data.results)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
      }
    
    getCharacters();
  }, []);

  return (
    <section className="character-list grid-view">
      {characters.map(char => (
        <CardDiv>
          <WhiteDiv>
            <img src={char.image} />
            <StyledH2>{char.name}</StyledH2>
            <StyledP>Status: {char.status}</StyledP>
            <StyledP>Species: {char.species}</StyledP>
            <StyledP>Gender: {char.gender}</StyledP>
          </WhiteDiv>
        </CardDiv>
      ))}
    </section>
  );
}
