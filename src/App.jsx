import { Route, Routes } from 'react-router';

import Contacts from './components/ContactsList';
import CreateContact from './components/CreateContact';

import './App.css';

export default function App() {
  return (
    <div id="app-container">
      <Routes>
        <Route path='/' element={<Contacts/>}/>
        <Route path='/new-contacts' element={<CreateContact/>}/>
      </Routes>
    </div>
  );
}
