import React, { useEffect, useState } from "react";
import LocationCard from './LocationCard';
import axios from 'axios';

export default function LocationsList() {
    const [locations, setLocations] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getLocations = () => {
        axios
        .get('https://rickandmortyapi.com/api/location/')
        .then(response => {
          setLocations(response.data.results)
          console.log("locations", response.data.results)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
      }
    
    getLocations();
  }, []);

  return (
    <section className="character-list grid-view">
      {locations.map(location => (
        <LocationCard location={location} />
      ))}
    </section>
  );
}
