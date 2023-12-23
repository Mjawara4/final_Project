import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [places, setPlaces] = useState([]);
  const [newPlace, setNewPlace] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/api/places')
      .then(response => setPlaces(response.data));
  }, []);

  const addPlace = () => {
    axios.post('http://localhost:3001/api/places', { name: newPlace })
      .then(response => setPlaces([...places, response.data]));
    setNewPlace('');
  };

  return (
    <div>
      <h1>Vacation Places</h1>
      <ul>
        {places.map(place => (
          <li key={place.name}>{place.name}</li>
        ))}
      </ul>
      <div>
        <input type="text" value={newPlace} onChange={(e) => setNewPlace(e.target.value)} />
        <button onClick={addPlace}>Add Place</button>
      </div>
    </div>
  );
}

export default App;

