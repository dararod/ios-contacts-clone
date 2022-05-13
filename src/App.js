import './App.css';
import { FiPlus, FiSearch } from 'react-icons/fi';
import database from './static/dumbdata.json';
import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(database.sort((a, b) => {
    if (a.namelast.toUpperCase() > b.namelast.toUpperCase()) {
      return 1;
    }
  
    return -1;
  
  }));
  return (
    <div style={{backgroundColor: '#fff', borderRadius: '8px', width: '414px', height: '896px', overflow: 'hidden' }}>
    <nav className="nav-contacts">
      <button className='groups-button'>Groups</button>
      <h1>Contacts</h1>
      <button className='icon-button'><FiPlus size="1.5rem" color='#007aff'/></button>
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

export default App;
