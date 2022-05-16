import { useState } from 'react';

import Nav from '../components/Contacts/Nav';
import ContactsList from '../components/Contacts/ContactsList';
import database from '../static/dumbdata_with_ids.json';

export default function Contacts() {
  const [contacts, _setContacts] = useState(database.sort((a, b) => {
    if (a.namelast.toUpperCase() > b.namelast.toUpperCase()) {
      return 1;
    }
  
    return -1;
  
  }));

  return (
    <div>
      <Nav />
      <ContactsList contacts={contacts} />
    </div>
  );
}
