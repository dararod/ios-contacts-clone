import database from '../../static/dumbdata.json';
import { useState } from 'react';
import { FiPlus, FiSearch } from 'react-icons/fi';
import './ContactsList.css';
import { Link } from 'react-router-dom';

function Contacts() {
  const [contacts, setContacts] = useState(database.sort((a, b) => {
    if (a.namelast.toUpperCase() > b.namelast.toUpperCase()) {
      return 1;
    }
  
    return -1;
  
  }));
    return (
    <div>
     <nav className="nav-contacts">
      <button className='groups-button'>Groups</button>
      <h1>Contacts</h1>
      <Link to={'/new-contacts'}><button className='icon-button'><FiPlus size="1.5rem" color='#007aff'/></button></Link>
    </nav>
    <main>
    <input className='input-search' type="Search" placeholder="Search"></input>
      {
        contacts.map((contact) => <li className='contacts-list'>{contact.namefirst} <strong>{contact.namelast}</strong></li>
        )
      }
    </main>
    </div>
    );
}
export default Contacts;