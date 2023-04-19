import React, { useState, useEffect } from 'react';
import './TablaReservas.css';

function TablaReservas({ habitaciones, diasDelMes, mesActualNumerico, yearActual, reservas }) {
  return (
    <table className="tabla-reservas">
      <thead>
        <tr>
          <th>Habitación</th>
          {[...Array(diasDelMes)].map((_, i) => {
            const fecha = new Date(yearActual, mesActualNumerico - 1, i + 1);
            const diaSemana = fecha.toLocaleString('es-ES', { weekday: 'short' });
            return <th key={i}>{`${diaSemana} ${i + 1}`}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {habitaciones.map((habitacion) => (
          <tr key={habitacion.id}>
            <td>{habitacion.nombre}</td>
            {[...Array(diasDelMes)].map((_, i) => {
              const fecha = new Date(yearActual, mesActualNumerico - 1, i + 1);
              const reservasHabitacion = reservas.filter(reserva => reserva.habitacion === habitacion.numero);
              const reservaDia = reservasHabitacion.find(reserva => fecha.getTime() >= new Date(reserva.fechaInicio).getTime() && fecha.getTime() <= new Date(reserva.fechaFin).getTime());
              let color = 'white';
              if (reservaDia) {
                switch (reservaDia.estado) {
                  case 'alquilado':
                    color = 'red';
                    break;
                  case 'confirmado':
                    color = 'green';
                    break;
                  case 'provisional':
                    color = 'yellow';
                    break;
                  case 'cancelado':
                    color = 'gray';
                    break;
                  default:
                    break;
                }
              }
              return <td key={i} style={{ backgroundColor: color }}></td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TablaReservas;