import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ParkingSpaces from './Pages/ParkingSpaces';
import ParkingSpacesAvailable from './Pages/ParkingSpacesAvailable';
import Footer from './Component/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/parkingspaces" element={<ParkingSpaces />} />
        <Route path="/parkingppacespvailable" element={<ParkingSpacesAvailable />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
