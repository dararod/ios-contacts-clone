import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './Nav.css';

export default function Nav() {
  return (
    <header id="contacts-nav">
      <nav id="contacts-nav-buttons">
        <button id="contacts-nav-groups-button">Groups</button>
        <h1>Contacts</h1>
        <Link to="/new">
          <button id="contacts-nav-add-button">
            <FiPlus size="1.5rem" color='#007aff'/>
          </button>
        </Link>
      </nav>
      <input id="contacts-nav-search" type="Search" placeholder="Search" />
    </header>
  );
}
