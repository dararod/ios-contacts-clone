import React from 'react'
import { Link } from 'react-router-dom'

import CreateContactInput from './Input'

import './CreateContact.css'

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
        <button className="done-button" type="submit">
          Done
        </button>
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
      <CreateContactInput />
    </div>
  )
}
