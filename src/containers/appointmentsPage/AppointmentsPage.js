import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm"
import { TileList } from '../../components/tileList/TileList';

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
  const [ title, setTitle ] = useState('appointment title');
  const [ contact, setContact ] = useState('');
  const [ date, setDate ] = useState('');
  const [ time, setTime ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateAppointments = props.updateAppointments;
    updateAppointments( title, contact, date, time);
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
        handleSubmit={handleSubmit}
        title={title}
        setTitle={setTitle}
        setContact={setContact}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        contacts={props.contacts}

        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList data={props.appointments}/>
      </section>
    </div>
  );
};
