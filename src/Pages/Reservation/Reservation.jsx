import React, { useState } from "react";

const Reservation = ()=>{
    const [destination, setDestination] = useState('');
    const [numRooms, setNumRooms] = useState(1);
    const [numAdults, setNumAdults] = useState(1);
    const [numChildren, setNumChildren] = useState(0);
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');

    const handleSearch = () => {
        console.log('Rechercher des disponibilités pour :', {
        destination,
        numRooms,
        numAdults,
        numChildren,
        checkInDate,
        checkOutDate,
        });
    };

    return (
      <div className="search-form" id="home">
          <label htmlFor="destination">Destination :</label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <label htmlFor="numRooms">Nombre de chambres :</label>
          <select
            id="numRooms"
            value={numRooms}
            onChange={(e) => setNumRooms(Number(e.target.value))}
          >
            <option value="1">1</option>
            <option value="2">2</option>

          </select>
          <label htmlFor="numAdults">Adultes :</label>
          <select
            id="numAdults"
            value={numAdults}
            onChange={(e) => setNumAdults(Number(e.target.value))}
          >
          
          </select>
          <label htmlFor="numChildren">Enfants :</label>
          <select
            id="numChildren"
            value={numChildren}
            onChange={(e) => setNumChildren(Number(e.target.value))}
          >
          
          </select>
          <label htmlFor="checkInDate">Date d'arrivée :</label>
          <input
            type="date"
            id="checkInDate"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
          />
          <label htmlFor="checkOutDate">Date de départ :</label>
          <input
            type="date"
            id="checkOutDate"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
          />
          <button onClick={handleSearch}>Vérifier les disponibilités</button>
      </div>
    )
}

export default Reservation