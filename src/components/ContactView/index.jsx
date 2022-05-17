import React from "react";
import { Link } from "react-router-dom";

import "./ContactView.css"

export default function ContactsViewComponent () {
    return (
        <Link to={`/`}>
        <button id="contact-view-button">Contacts</button>
            </Link>
    );
}