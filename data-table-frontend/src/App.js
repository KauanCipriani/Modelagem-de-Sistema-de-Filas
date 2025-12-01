import React, { useState } from 'react';
import DataForm from './components/DataForm';
import DataTable from './components/DataTable';
import './styles/main.css';

function App() {
  const [results, setResults] = useState([]);

  const handleSubmit = (data) => {
    setResults(data);
  };

  return (
    <div className="App">
      <h1>Sistema de Fila de Atendimento</h1>
      <DataForm onSubmit={handleSubmit} />
      {results.length > 0 && <DataTable data={results} />}
    </div>
  );
}

export default App;