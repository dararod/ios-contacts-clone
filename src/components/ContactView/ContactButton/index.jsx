import React from 'react'
import { BsFillChatFill, BsFillTelephoneFill } from 'react-icons/bs'
import { IoIosMail } from 'react-icons/io'

import './ContactViewButton.css'

export default function ContactButton() {
  return (
    <div className="contact-view-button">
      <button>
        <BsFillChatFill size={'1.4rem'} />
        <dt>message</dt>
      </button>
      <button>
        <BsFillTelephoneFill size={'1.4rem'} />
        <dt>call</dt>
      </button>
      <button>
        <IoIosMail size={'1.4rem'} />
        <dt>mail</dt>
      </button>
    </div>
  )
}
