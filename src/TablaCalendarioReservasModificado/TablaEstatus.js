import React from 'react';
import './TablaReservas.css';

function TablaEstatus() {
    return (
      <div>
        <h2 className="tabla-estatus-title">Estatus por Colores</h2>
        <table className="tabla-estatus">
          <thead>
            <tr>
              <th>Estado</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Habitación alquilada</td>
              <td style={{ backgroundColor: 'red' }} />
            </tr>
            <tr>
              <td>Habitación confirmada</td>
              <td style={{ backgroundColor: 'green' }} />
            </tr>
            <tr>
              <td>Reservas provisionales</td>
              <td style={{ backgroundColor: 'yellow' }} />
            </tr>
            <tr>
              <td>Reservas canceladas</td>
              <td style={{ backgroundColor: 'gray' }} />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  export default TablaEstatus;
