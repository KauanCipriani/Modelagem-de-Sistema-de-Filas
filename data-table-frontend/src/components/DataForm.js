import React, { useState } from 'react';

function DataForm({ onSubmit }) {
  const [clients, setClients] = useState([{ arrival: '', duration: '' }]);

  const handleInputChange = (index, field, value) => {
    const newClients = [...clients];
    newClients[index][field] = value;
    setClients(newClients);
  };

  const addClient = () => {
    setClients([...clients, { arrival: '', duration: '' }]);
  };

  const removeClient = (index) => {
    setClients(clients.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const results = calculateQueue(clients);
    onSubmit(results);
  };

  const calculateQueue = (clients) => {
    const results = [];
    let lastEnd = parseFloat(clients[0].arrival) || 0;
    let queue = 0;

    clients.forEach((client, index) => {
      const arrival = parseFloat(client.arrival) || 0;
      const durationMinutes = parseFloat(client.duration) || 0;
      const durationHours = durationMinutes / 60;

      let start, wait;
      if (arrival < lastEnd) {
        queue += 1;
        start = lastEnd;
      } else {
        queue = 0;
        start = arrival;
      }

      const end = start + durationHours;
      wait = start - arrival;

      results.push({
        client: index + 1,
        arrival: formatHHMM(arrival),
        start: formatHHMM(start),
        end: formatHHMM(end),
        wait: formatTime(wait),
        queue: queue,
      });

      lastEnd = end;
    });

    return results;
  };

  const formatHHMM = (value) => {
    const hours = Math.floor(value);
    const minutes = Math.round((value - hours) * 60);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  };

  const formatTime = (value) => {
    const hours = Math.floor(value);
    const minutes = Math.round((value - hours) * 60);
    return `${hours}h ${minutes}min`;
  };

  return (
    <form onSubmit={handleSubmit} className="data-form">
      <h2>Adicionar Clientes</h2>
      {clients.map((client, index) => (
        <div key={index} className="client-input">
          <label>
            Cliente {index + 1}
            <input
              type="number"
              step="0.1"
              placeholder="Chegada (ex: 14.5)"
              value={client.arrival}
              onChange={(e) => handleInputChange(index, 'arrival', e.target.value)}
            />
          </label>
          <label>
            Duração (min)
            <input
              type="number"
              placeholder="Duração em minutos"
              value={client.duration}
              onChange={(e) => handleInputChange(index, 'duration', e.target.value)}
            />
          </label>
          {clients.length > 1 && (
            <button type="button" onClick={() => removeClient(index)} className="remove-btn">
              Remover
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={addClient} className="add-btn">
        + Adicionar Cliente
      </button>
      <button type="submit" className="submit-btn">
        Calcular Fila
      </button>
    </form>
  );
}

export default DataForm;