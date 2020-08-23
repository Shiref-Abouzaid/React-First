import React from 'react';

import './App.css';
import WeatherCard from './WeatherCard'
import { render } from '@testing-library/react';
import NavBar from './components/NavBar'
function App() {
  render(); {
    return (
      <div className="App">
          <NavBar/>
      </div>
    );
  }


}

export default App;
