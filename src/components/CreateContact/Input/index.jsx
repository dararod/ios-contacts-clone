import React from 'react'
import { FiPlus } from 'react-icons/fi'

import './CreateContactInput.css'

export default function CreateContactInput() {
  return (
    <div>
      <div className="contact-input">
        <input placeholder="First Name" name="firstName"></input>
        <input placeholder="Last Name" name="lastName"></input>
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
