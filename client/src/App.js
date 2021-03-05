import React, { useState, useEffect } from 'react';
import './App.css';
import ApiService from './ApiService';


function App () {
  const [dishes, setDishes] = useState([]);

  const BASE_URL = 'http://localhost:3001/dish';

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => console.log('data -> ', data))
      .catch((error) => console.log(`Error fetching ${BASE_URL}`, error))
  })



  return (
    <div className="App">
      <header>App in progess</header>
      {/* <Router> */}
    </div>
  );
}

export default App;
