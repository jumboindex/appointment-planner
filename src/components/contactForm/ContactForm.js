import React from "react";

export const ContactForm = ({
  name,
  setName,
  number,
  setNumber,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
      <input type='tel' value={number} onChange={(e) => setNumber(e.target.value)} pattern='\d{11}'></input>
      <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
      <input type='submit'></input>
    </form>
  );
};


