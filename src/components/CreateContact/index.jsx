import './CreateContact.css'
import { FiPlus } from 'react-icons/fi';
import { Link } from "react-router-dom";

export default function CreateContact () {
    return(
        <div style={{backgroundColor: '#f2f2f7', width: '414px', height: '896px'}}>
           <nav className='create-contact-nav'>
                <Link to={'/'}><button>Cancel</button></Link>
                <h3>New Contact</h3>
            <button className='done-button'>Done</button>
            </nav>
            <div className='contact-input'>
             <input placeholder='First Name'></input>
             <input placeholder='Last Name'></input>
             <input placeholder='Company'></input>
        </div>
            <div className='number-input'>
                <p>add phone</p>
            </div>
            <button className='plus-button'><FiPlus color='#fff' size={'1.5rem'}/></button>
            <div className='number-input'>
                <p>add email</p>
            </div>
            <button className='plus-button'><FiPlus color='#fff' size={'1.5rem'}/></button>
        </div>
    );
}