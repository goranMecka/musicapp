import React from 'react';
import { useParams } from 'react-router-dom';
import artists from '../../db';
import styles from './AlbumPage.module.css'



const AlbumsPage: React.FC = () => {
  const { artistId, albumId } = useParams<{ artistId: string, albumId: string }>(); // Get the artist ID and album ID from URL params
  const artist = artists.find(artist => artist.id.toString() === artistId); // Find the artist by ID

  if (!artist) {
    return <div>Artist not found</div>; // Handle case when artist is not found
  }

  const album = artist.albums.find(album => album.albumId === albumId); // Find the album by ID
   console.log(albumId);
   
 
  if (!album) {
    return <div>Album not found</div>; // Handle case when album is not found
  }

  return (
    <div className={`col-12 ${styles.album_container}`}>
      <img src={`/images/albums/${album.cover}.jpg`} 
      className={styles.album_img} alt={album.title} />
      <p>Title:  <span>{album.title}</span></p>
      <p>Year:  <span>{album.year}</span></p>
      <p>Price:  <span>{album.price}$</span></p>
    </div>
  );

  
};

export default AlbumsPage;