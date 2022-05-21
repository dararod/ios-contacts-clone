import React from 'react'

import './CreateContact.css'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function CreateContact() {
  return (
    <div
      style={{ backgroundColor: '#f2f2f7', width: '414px', height: '896px' }}
    >
      <nav className="create-contact-nav">
        <Link to={'/'}>
          <button>Cancel</button>
        </Link>
        <h3>New Contact</h3>
        <button className="done-button">Done</button>
      </nav>
      <div className='avatar'>
        <div id='avatar2'>
        <div id='avatar1'></div>
        <div id='avatar-body'></div>
        </div>
      </div>
      <div className="contact-input">
        <input placeholder="First Name"></input>
        <input placeholder="Last Name"></input>
        <input placeholder="Company"></input>
      </div>
      <div className="number-input">
        <button className='create-contact-add-phone'></button>
      <FiPlus id='plus-button' color="#fff" size={"1.1rem"}/>
      <button className='create-contact-text-button'>add phone</button>
      </div>
      <div className="number-input">
        <button className='create-contact-add-phone'></button>
      <FiPlus id='plus-button' color="#fff" size={"1.1rem"}/>
      <button className='create-contact-text-button'>add email</button>
      </div>
    </div>
  )
}
