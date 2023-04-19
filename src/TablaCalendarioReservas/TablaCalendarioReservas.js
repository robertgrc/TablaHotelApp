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
  ];

  const reservas = [
    {
      id: 4,                  
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
      habitacion: '102',
      nombre: 'julio',
      fechaReserva: '2023-04-20', 
      fechaInicio: '2022-04-26',
      fechaFin: '2022-04-28',
      estado: 'provisional'
    },
    {
      id: 3,
      habitacion: '103',
      nombre: '03 DWB',
      fechaReserva: '2023-04-20', 
      fechaInicio: '2022-04-22',
      fechaFin: '2022-04-23',
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