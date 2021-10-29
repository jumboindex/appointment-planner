import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {

   const [ contacts, setContacts ] = useState([]);
   
   const updateContacts = (name, phoneNumber, email) => {
    setContacts(prevState => {
      const newContact = {
        name: name,
        phoneNumber: phoneNumber,
        email: email
      };
      return [...prevState, newContact]; 
    })
   };

   const [ appointments, setAppointments ] = useState([]);

   const updateAppointments = (title, contact, date, time) => {
      setAppointments( prevState => {
        const newAppointment = {
          title: title,
          contact: contact,
          date: date, 
          time: time
        };
        return [...prevState, newAppointment];
      })
   };

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} updateContacts={updateContacts} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage appointments={appointments} updateAppointments={updateAppointments} contacts={contacts} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
