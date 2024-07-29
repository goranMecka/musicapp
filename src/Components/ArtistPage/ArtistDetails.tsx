import React from 'react';
import { Link, useParams } from 'react-router-dom';
import artists from '../../db';
import styles from './ArtistDetails.module.css'

const ArtistDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the artist ID from URL params
  const artist = artists.find(artist => artist.id.toString() === id); // Find the artist by ID

  if (!artist) {
    return <div>Artist not found</div>; // Handle case when artist is not found
  }

  return (
    <div className={`col-12 ${styles.details_container}`}>
      <Link to={`/artist/${artist.id}/album/:albumId`} className='album-link'>
        <img src={`../images/covers/${artist.cover}.jpg`} alt={artist.name} className={styles.artist_cover} />
      </Link>
      <h2>{artist.name}</h2>
      <p>{artist.bio}</p>
      <div className={`row ${styles.albums_container}`}>
        {artist.albums.map(album => (
          <div key={album.albumId} className={`col-6 ${styles.album_img_div}`}>
            <Link to={`/artist/${artist.id}/${album.albumId}`} className='album-link'>
              <img src={`../images/albums/${album.cover}.jpg`} className={`${styles.album_img}`} alt={album.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );

};

export default ArtistDetails;

