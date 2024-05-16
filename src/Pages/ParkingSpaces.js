import React, { useEffect, useState } from 'react';
import '../styles.css';

function ParkingSpaces() {
  const [parkingRecords, setParkingRecords] = useState([]);

  useEffect(() => {
    const storedRecords = JSON.parse(localStorage.getItem('parkingRecords')) || [];
    setParkingRecords(storedRecords);
  }, []);

  const returnHome = () => {
    window.location.replace('/');
  };

  const handleDelete = (id) => {
    const updatedRecords = parkingRecords.filter(record => record.id !== id);
    
    setParkingRecords(updatedRecords);
    
    localStorage.setItem('parkingRecords', JSON.stringify(updatedRecords));
  };

  return (
    <div className='a'>
      <h1>Vagas Registradas</h1>
      <ul>
        {parkingRecords.map(record => (
          <li key={record.id}>
            <strong>Placa:</strong> {record.placa}, 
            <strong> Nome:</strong> {record.nome}, 
            <strong> Número Apartamento:</strong> {record.numeroApartamento}, 
            <strong> Bloco:</strong> {record.bloco}, 
            <strong> Modelo:</strong> {record.modelo}, 
            <strong> Cor:</strong> {record.cor}, 
            <strong> Número Vaga:</strong> {record.numeroVaga}
            <button onClick={() => handleDelete(record.id)}>Excluir</button>
          </li>
        ))}
      </ul>

      <button onClick={returnHome}>Retornar para a página inicial</button>
    </div>
  );
}

export default ParkingSpaces;
