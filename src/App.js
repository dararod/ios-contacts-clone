import './App.css';
import Contacts from './components/Contacts';
import { Route, Routes } from 'react-router';

function App() {
  const NewContact = () : Element => <h1>NewContacts</h1>

  return (
    <div style={{backgroundColor: '#fff', borderRadius: '8px', width: '414px', height: '896px', overflow: 'hidden' }}>
    <Routes>
      <Route path='/' element={<Contacts/>}/>
      <Route path='/new-contacts' element={<NewContact/>}/>
    </Routes>
    </div>
  );
}

export default App;
