import React from 'react'
import { Route, Routes } from 'react-router'

import Contacts from './views/Contacts'
import ContactView from './views/ContactView'
import NewContact from './views/NewContact'

import './App.css'

export default function App() {
  return (
    <div id="app-container">
      <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path="/:id" element={<ContactView />} />
        <Route path="/new" element={<NewContact />} />
      </Routes>
    </div>
  )
}
