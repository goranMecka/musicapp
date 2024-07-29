import React from 'react';

import styles from './ArtistItems.module.css'
import { Link } from 'react-router-dom';
import { Artist } from '../interfaces/ArtistInterfaces';


interface Props {
  artists: Artist[]; // Assuming artists is an array of Artist objects
}

const ArtistItems: React.FC<Props> = ({ artists }) => {
  return (
    <div className={`row ${styles.artist_container}`}>
      <h2>Browse the artists</h2>
      {artists.map(artist => (
        <Link key={artist.id} to={`/artist/${artist.id}`} className={`artist-item-link col-12 ${styles.artist_item}`}>
           <div className={styles.artist_name}>
            <h2>{artist.name}</h2>
          </div>
          <img src={`./images/covers/${artist.cover}.jpg`} alt={artist.name} className={styles.img} />
       
        </Link>
      ))}
    </div>
  );
};

export default ArtistItems;