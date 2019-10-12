import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard.js";
import SearchForm from "./SearchForm";

export default function LocationsList(props) {
    const [ locationList, setLocationList ] = useState([]);

    useEffect(() => {
     axios.get('https://rickandmortyapi.com/api/location/')
       .then( res => {
         console.log(res);
         setLocationList(res.data.results);
       })
       .catch( err => {
         console.log(err);
       });
   }, [props.match.path]);
 
    return (
        <div>
        <SearchForm
          place="location"
          setLocations={setLocationList}
        />

     <section className="location-list grid-view">
       { locationList.map( location => {
         return <LocationCard key={location.id} {...location} />
       })}
     </section>
     </div>
   );
 
  }