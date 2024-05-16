import React, { useEffect, useState } from 'react';
import '../styles.css';

function ParkingSpacesAvailable() {
  const [availableSpaces, setAvailableSpaces] = useState(0);
  const [occupiedSpaces, setOccupiedSpaces] = useState(0);

  useEffect(() => {
    const storedRecords = JSON.parse(localStorage.getItem('parkingRecords')) || [];
    
    const availableCount = 50 - storedRecords.length;
    const occupiedCount = storedRecords.length;
    
    setAvailableSpaces(availableCount);
    setOccupiedSpaces(occupiedCount);
  }, []);

  const returnHome = () => {
    window.location.replace('/');
  };

  return (
    <div className='a'>
      <h1>Vagas Disponíveis</h1>
      <p>Vagas Disponíveis: {availableSpaces}</p>
      <p>Vagas Ocupadas: {occupiedSpaces}</p>

      <button onClick={returnHome}>Retornar para a página inicial</button>
    </div>
  );
}

export default ParkingSpacesAvailable;
