import React from 'react'

import './DataField.css'

export default function DataField({ contact }) {
  return (
    <>
      <div className="data-field">
        <div className="data-field-mobile">
          <h4>mobile</h4>
          <button>{contact.phone}</button>
        </div>
        <div>
          <h4>home</h4>
          <button>850-331-1479</button>
        </div>
      </div>
      <div id="data-field-work">
        <h4>work</h4>
        <button>{contact.email}</button>
      </div>
    </>
  )
}
