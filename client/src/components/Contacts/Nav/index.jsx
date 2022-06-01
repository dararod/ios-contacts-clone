import React from 'react'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import './Nav.css'

export default function Nav({ filter }) {
  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    setSearch(e.target.value)
    filter(e.target.value)
  }
  return (
    <header id="contacts-nav">
      <nav id="contacts-nav-buttons">
        <button id="contacts-nav-groups-button">Groups</button>
        <h1>Contacts</h1>
        <Link to="/new">
          <button id="contacts-nav-add-button">
            <FiPlus size="1.5rem" color="#007aff" />
          </button>
        </Link>
      </nav>
      <input
        id="contacts-nav-search"
        type="Search"
        placeholder="Search"
        onChange={handleChange}
        value={search}
      />
      <button id="contacts-nav-search-svg">
        <FiSearch color="#848488" size={'1.4rem'} />
      </button>
    </header>
  )
}
