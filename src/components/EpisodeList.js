import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect

    const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getEpisodes = () => {
        axios
        .get('https://rickandmortyapi.com/api/episode/')
        .then(response => {
          setEpisodes(response.data.results)
          console.log("episode", response.data.results)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
      }
    
    getEpisodes();
  }, []);

  return (
    <section className="character-list grid-view">
      {episodes.map(episode => (
        <EpisodeCard episode={episode} />
      ))}
    </section>
  );
}