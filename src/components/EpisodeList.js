import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from './EpisodeCard.js';
import SearchForm from "./SearchForm";

 export default function EpisodeList(props) {
  const [ episodeList, setEpisodeList ] = useState([]);

   useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode/')
      .then( res => {
        console.log(res);
        setEpisodeList(res.data.results);
      })
      .catch( err => {
        console.log(err);
      });
  }, [props.match.path]);

   return (
    <div>
    <SearchForm
      place="episode"
      setEpisodes={setEpisodeList}
    />

    <section className="episode-list grid-view">
      { episodeList.map( episode => {
        return <EpisodeCard key={episode.id} {...episode} />
      })}
    </section>
    </div>
  );

 }