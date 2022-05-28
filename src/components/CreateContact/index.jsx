import React from 'react'

import './CreateContact.css'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function CreateContact() {
  const validate = (firstName, lastname) => {
    if (!firstName.includes('')) 
    return 'Rellena campo';

    if (lastname.includes('')) return 'Rellena campo';
  }
  return (
    <div
      style={{ backgroundColor: '#f2f2f7', width: '414px', height: '896px' }}
    >
      <nav className="create-contact-nav">
        <Link to={'/'}>
          <button>Cancel</button>
        </Link>
        <h3>New Contact</h3>
        <button className="done-button" type='submit'>Done</button>
      </nav>
      <div id="avatar-box">
        <div className="avatar">
          <div id="avatar-border">
            <div id="avatar-head"></div>
            <div id="avatar-body"></div>
          </div>
        </div>
        <button id="create-contact-add-photo">Add Photo</button>
      </div>
      <div className="contact-input">
        <input
         placeholder="First Name"
         name='firstName'
         value={firstName}
         ></input>
        <input
         placeholder="Last Name"
         name='lastName'
         value={lastname}></input>
        <input placeholder="Company"></input>
      </div>
      <div className="number-input">
        <button className="create-contact-add-phone"></button>
        <FiPlus id="plus-button" color="#fff" size={'1.1rem'} />
        <button className="create-contact-text-button">add phone</button>
      </div>
      <div className="number-input">
        <button className="create-contact-add-phone"></button>
        <FiPlus id="plus-button" color="#fff" size={'1.1rem'} />
        <button className="create-contact-text-button">add email</button>
      </div>
    </div>
  )
}
