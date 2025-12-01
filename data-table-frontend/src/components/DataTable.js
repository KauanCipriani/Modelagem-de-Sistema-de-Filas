import React from 'react';

function DataTable({ data }) {
  return (
    <div className="data-table">
      <h2>Resultados</h2>
      <table>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Chegada</th>
            <th>Início</th>
            <th>Fim</th>
            <th>Espera</th>
            <th>Fila</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.client}>
              <td>{row.client}</td>
              <td>{row.arrival}</td>
              <td>{row.start}</td>
              <td>{row.end}</td>
              <td>{row.wait}</td>
              <td>{row.queue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;