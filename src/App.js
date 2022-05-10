import './App.css';
import { FiPlus, FiSearch } from 'react-icons/fi';

function App() {
  return (
    <>
    <nav className="nav-contacts">
      <h1>Contacts</h1>
      <input type="Search" placeholder="Search"></input>
      <button className='icon-button'><FiPlus size="2rem" color='white'/></button>

    </nav>
    </>
  );
}

export default App;
