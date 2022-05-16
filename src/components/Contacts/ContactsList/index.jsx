import React from 'react';
import { Link } from 'react-router-dom';

import './ContactsList.css';

export default function ContactsList({
  contacts
}) {
  return (
    <ul id="contacts-list">
      {
        contacts.map((contact) => (
          <li className="contacts-list-item" key={contact.id}>
            <Link to={`/${contact.id}`}>
              {contact.namefirst} <b>{contact.namelast}</b>
            </Link>
          </li>
        ))
      }
    </ul>
  );
}
