import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Header from './components/Header';
import React, { useState} from 'react';

function App() {


  const [contacts, setcontacts] = useState([]);
  return (
    <>
      <Header />
      <div className=' ui container'>
        <AddContact />
        <ContactList contacts={contacts} />
      </div>
    </>
  );
}

export default App;
