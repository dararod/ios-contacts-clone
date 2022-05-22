import React from 'react'

import './ContactAvatar.css'

export default function ContactAvatar({ contact }) {
  return (
    <div className="contact-view-avatar-box">
      <div className="contact-view-avatar">
        <h2>
          {contact.namefirst.charAt(0)}
          {contact.namelast.charAt(0)}
        </h2>
      </div>
      <h3 id="contact-view-name">
        {contact.namefirst} {contact.namelast}
      </h3>
    </div>
  )
}
