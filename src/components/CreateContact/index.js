import './CreateContact.css'
import { Link } from "react-router-dom";

function CreateContact () {
    return(
        <div style={{backgroundColor: '#f2f2f7', width: '414px', height: '896px'}}>
        <nav className='create-contact-nav'>
        <Link to={'/'}><button>Cancel</button></Link>
        <h2>New Contact</h2>
        <button className='done-button'>Done</button>
        </nav>
        <div className='contact-input'>
        <input placeholder='First Name'></input>
        <input placeholder='Last Name'></input>
        <input placeholder='Company'></input>
        </div>
        </div>
    );
}
export default CreateContact;