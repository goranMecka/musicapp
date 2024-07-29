

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import NavBarComponent from './Components/NavBarComponent/NavBarComponent';
import ArtistItems from './Components/ArtistItems/ArtistItems';

import artists from './db';
import ArtistDetails from './Components/ArtistPage/ArtistDetails';
import AlbumsPage from './Components/AlbumsPage/AlbumsPage';

const App: React.FC = () => {
  return (
    <div className='row'>
       <Router>
      <Link to={'/'} className='nav-bar-link'>
      <NavBarComponent /> 
      </Link>
   
          <Routes>
            <Route path='/' element={<ArtistItems artists={artists} />} />
            <Route path="/artist/:id" element={<ArtistDetails />} />
            <Route path="/artist/:artistId/:albumId" element={<AlbumsPage />} /> 
          </Routes>
          </Router>
        </div>
    
  
  );
};

export default App;


