import React from "react";

export const ContactPicker = (props) => {

  const contactArr = props.contactList;
  const handleChange = props.handleChange;

  return (
    <select onChange={handleChange}>
      <option key='default' value='Choose a contact' selected='selected'>select a contact</option> 
      {contactArr.map((element, index) => <option key={index} value={element.name}> {element.name} </option>)}   
    </select>
  );
};
