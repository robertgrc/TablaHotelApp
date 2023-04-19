import React from 'react';
import TablaEstatus from './TablaEstatus';
import TablaReservas from './TablaReservas';
import './TablaReservas.css';

function TablaCalendarioReservas() {
  const habitaciones = [
      { id: 1, nombre: '01 SWB', numero: '101' },
      { id: 2, nombre: '02 TWB', numero: '102' },
      { id: 3, nombre: '03 DWB', numero: '103' },
      { id: 4, nombre: '04 SWB', numero: '104' },
      { id: 5, nombre: '05 TWB', numero: '105' },
      { id: 6, nombre: '06 SWB', numero: '106' },
      { id: 7, nombre: '07 TWB', numero: '107' },
      { id: 8, nombre: '08 TWB', numero: '108' },
      { id: 9, nombre: '09 TWB', numero: '109' },
      { id: 10, nombre: '10 SWB', numero: '110' },
      { id: 11, nombre: '11 TWB', numero: '111' },
      { id: 12, nombre: '12 DWB', numero: '112' },
      { id: 13, nombre: '13 SWB', numero: '113' },
      { id: 14, nombre: '14 TWB', numero: '114' },
  ];

  const reservas = [
    {
      id: 1,                  
      habitacion: '101',      
      nombre: 'Juan Pérez',   
      fechaReserva: '2023-04-20',  
      fechaInicio: '2023-04-25',  
      fechaFin: '2023-04-27',      
      estado: 'alquilado'     
      // estado de la reserva, puede ser 'alquilado', 'confirmado', 'provisional' o 'cancelado'
    },
    {
      id: 2,
      habitacion: '101',
      nombre: 'julio',
      fechaReserva: '2023-04-3', 
      fechaInicio: '2023-04-15',
      fechaFin: '2023-04-18',
      estado: 'provisional'
    },
    {
      id: 3,
      habitacion: '103',
      nombre: 'max',
      fechaReserva: '2023-04-20', 
      fechaInicio: '2023-04-22',
      fechaFin: '2023-04-23',
      estado: 'cancelado'
    },
    {
      id: 4,
      habitacion: '104',
      nombre: 'dax',
      fechaReserva: '2023-04-20', 
      fechaInicio: '2023-04-8',
      fechaFin: '2023-04-14',
      estado: 'confirmado'
    },,
    {
      id: 5,
      habitacion: '105',
      nombre: 'flor',
      fechaReserva: '2023-04-4', 
      fechaInicio: '2023-04-7',
      fechaFin: '2023-04-23',
      estado: 'provisional'
    },
    {
      id: 6,
      habitacion: '111',
      nombre: 'ken',
      fechaReserva: '2023-04-1', 
      fechaInicio: '2023-04-1',
      fechaFin: '2023-04-4',
      estado: 'confirmado'
    },
    {
      id: 7,
      habitacion: '114',
      nombre: 'Ryu',
      fechaReserva: '2023-04-28', 
      fechaInicio: '2023-04-28',
      fechaFin: '2023-04-30',
      estado: 'cancelado'
    }
  ];

  const fechaActual = new Date();
  const mesActual = fechaActual.toLocaleString('es-ES', { month: 'long' });
  const mesActualNumerico = fechaActual.getMonth() + 1;
  const yearActual = fechaActual.getFullYear();
  // Obtiene el último día del mes actual
  const diasDelMes = new Date(fechaActual.getFullYear(), fechaActual.getMonth() + 1, 0).getDate();

  return (
    <div className="container-calendario-reservas">
      <div className="tabla-calendario-reservas">
        <h1 className="title-tabla-registro">Hotel Ideal - Booking</h1>
        <div className="subtitle-tabla-registro">
          <h2>Planning de Reservaciones</h2>
          <div className="subtitle-tabla-registro-right">
            <h2>Mes:{ mesActual } </h2>
            <h2>Año:{ yearActual} </h2>
          </div>
        </div>
        <TablaReservas
          habitaciones={habitaciones}
          diasDelMes={diasDelMes}
          mesActualNumerico={mesActualNumerico}
          yearActual={yearActual}
          reservas={reservas}
        />
        <TablaEstatus />
      </div>
    </div>
  );
}

export default TablaCalendarioReservas;