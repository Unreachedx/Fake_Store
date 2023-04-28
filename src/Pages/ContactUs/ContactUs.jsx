import React from 'react'
import './ContactUs.css'
import { useState } from 'react';

function ContactUs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [textfield, setTextfield] = useState("");
  return (
    <form className='form-container'>
      <label className='heading'>Contact Us</label>
      <input
        className='firstName-container'
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        placeholder="First name"
        type="text"
        name="firstName"
        required
      />
      <input className='lastName-container'
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        placeholder="Last name"
        type="text"
        name="lastName"
        required
      />
      <textarea className='textarea-container'
        value={textfield}
        onChange={e => setTextfield(e.target.value)}
        placeholder="Write your message here"
        type="textarea"
        name="textfield"
        required
      />
      <button className='submit-button' type="submit">Submit</button>
    </form>
  );
}

export default ContactUs