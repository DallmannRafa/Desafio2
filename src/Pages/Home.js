import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

function Home() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    placa: '',
    nome: '',
    numeroApartamento: '',
    bloco: '',
    modelo: '',
    cor: '',
    numeroVaga: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = () => {

    const isEmptyField = Object.values(formData).some(value => value === '');

    if (isEmptyField) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const existingRecords = JSON.parse(localStorage.getItem('parkingRecords')) || [];
    const newRecord = { id: Date.now(), ...formData };
    const updatedRecords = [...existingRecords, newRecord];
    localStorage.setItem('parkingRecords', JSON.stringify(updatedRecords));

    console.log('Dados do formulário:', formData);

    setFormData({
      placa: '',
      nome: '',
      numeroApartamento: '',
      bloco: '',
      modelo: '',
      cor: '',
      numeroVaga: ''
    });
    
    alert('Registrado com sucesso');
  };

  const ParkingSpaces = () => {
    navigate('/parkingspaces');
  };

  const AvailableParkingSpaces = () => {
    navigate('/parkingppacespvailable');
  };

  return (
    <div className='a'>
      <h1>Página Inicial</h1>

      <div className='cadastro'>
        <form>
          <label htmlFor="placa">Placa do Veículo:</label>
          <input type="text" id="placa" value={formData.placa} onChange={handleInputChange} />

          <label htmlFor="nome">Nome do Proprietário:</label>
          <input type="text" id="nome" value={formData.nome} onChange={handleInputChange} />

          <label htmlFor="numeroApartamento">Número do Apartamento:</label>
          <input type="text" id="numeroApartamento" value={formData.numeroApartamento} onChange={handleInputChange}  />

          <label htmlFor="bloco">Bloco do Apartamento:</label>
          <input type="text" id="bloco" value={formData.bloco} onChange={handleInputChange}  />

          <label htmlFor="modelo">Modelo do Veículo:</label>
          <input type="text" id="modelo" value={formData.modelo} onChange={handleInputChange}  />

          <label htmlFor="cor">Cor do Veículo:</label>
          <input type="text" id="cor" value={formData.cor} onChange={handleInputChange}  />

          <label htmlFor="numeroVaga">Número da Vaga:</label>
          <input type="text" id="numeroVaga" value={formData.numeroVaga} onChange={handleInputChange}  />
        </form>
        <button type="button" onClick={handleSubmit}>Salvar</button>
      </div>

      <div className='buttons'>
        <button onClick={ParkingSpaces}>Vagas Registradas</button>
        <button onClick={AvailableParkingSpaces}>Vagas Disponíveis</button>
      </div>

    </div>
  );
}

export default Home;
