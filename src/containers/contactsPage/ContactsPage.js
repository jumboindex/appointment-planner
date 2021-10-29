import React, { useState, useEffect } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';


export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    const addContact = props.updateContacts;
    if (!duplicate) {
      addContact(name, number, email);
      setName('');
      setNumber('');
      setEmail('');
    } 
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    setDuplicate(false);
    const contactArr = props.contacts;
    contactArr.forEach(obj => {
      if (obj.name === name) {
        setDuplicate(true);
        console.log('name is a duplicate')
      }
    })
  }, [name])

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
        handleSubmit={handleSubmit} 
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        number={number}
        setNumber={setNumber}
        />
        {duplicate && <h3> Contact already exists </h3>}
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={props.contacts} />
      </section>
    </div>
  );
};
