import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import Nav from '../components/Contacts/Nav';
import database from '../static/dumbdata_with_ids.json';

export default function Contacts() {
  const [contacts, setContacts] = useState(database.sort((a, b) => {
    if (a.namelast.toUpperCase() > b.namelast.toUpperCase()) {
      return 1;
    }
  
    return -1;
  
  }));

  return (
    <div>
      <Nav />
      <main>
        <button className='search'><FiSearch size={'1.4rem'} color={'#757575'} /></button>
        {
          contacts.map((contact) => <li className='contacts-list'>{contact.namefirst} <strong>{contact.namelast}</strong></li>
          )
        }
      </main>
    </div>
  );
}
