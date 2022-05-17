import React from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi"

import "./ContactView.css"

export default function ContactsViewComponent () {
    return (
        <div style={{backgroundColor: '#f2f2f7', width: '414px', height: '896px'}}>
            <Link to={`/`}>
                <nav className="contact-view-nav">
                 <button> <FiChevronLeft size={"2.3rem"}/>Contacts</button>
                 <button>Edit</button>
                </nav>
            </Link>
        </div> 
    );
}