import React from 'react'
import { useState } from 'react'

import Nav from '../components/Contacts/Nav'
import ContactsList from '../components/Contacts/ContactsList'
import database from '../static/dumbdata_with_ids.json'

export default function Contacts() {
  const [contacts, setContacts] = useState(
    database.sort((a, b) => {
      if (a.namelast.toUpperCase() > b.namelast.toUpperCase()) {
        return 1
      }

      return -1
    }),
  )
  const filter = (term) => {
    const termNormalized = term.toLowerCase()
    const result = database.filter((contact) => {
      const nameFirstNormalized = contact.namefirst.toLowerCase()
      const nameLastNormalized = contact.namelast.toLowerCase()
      if (nameFirstNormalized.includes(termNormalized))
       || nameLastNormalized.includes(termNormalized) {
        return contact
      }
      return null
    })
    setContacts(result)
  }

  return (
    <div>
      <Nav filter={filter} />
      <ContactsList contacts={contacts} />
    </div>
  )
}
