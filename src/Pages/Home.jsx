import React, { useState } from 'react';
import '../App.css'; // Importez votre fichier de styles CSS
import Header from './Header/Header.jsx';
import Reservation from './Reservation/Reservation.jsx';

function Home() {

  return (
    <div className="App">
        <Header/>
      <main>
        <div className="hero">
          <h2 className='titre'>Akama Travel</h2>
          <p> Nous vous aidons à choisir la meilleure destination.</p>
          <Reservation/>
        </div>
      </main>
    </div>
  );
}

export default Home;