import React from 'react'
import { Link } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'

import ContactButton from './ContactButton'
import ContactAvatar from './ContactAvatar'
import DataField from './DataField'

import './ContactView.css'

export default function ContactsViewComponent() {
  return (
    <div
      style={{ backgroundColor: '#f2f2f7', width: '414px', height: '896px' }}
    >
      <nav className="contact-view-nav">
        <Link to={`/`}>
          <button>
            <FiChevronLeft size={'2.3rem'} />
            Contacts
          </button>
        </Link>
        <button id="contact-button-edit">Edit</button>
      </nav>
      <ContactAvatar />
      <ContactButton />
      <DataField />
    </div>
  )
}
