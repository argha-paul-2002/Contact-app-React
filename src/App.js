import { v4 as uuidv4 } from 'uuid';
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import ContactDetail from './components/ContactDetail';
import Header from './components/Header';
import React, { useState, useEffect} from 'react';
import { BrowserRouter , Route , Routes} from "react-router-dom";
import Navbar from './components/Navbar';

function App() {

  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

const [seatchTerm , setSearchTerm] = useState("");
const [searchResults, setSearchResults] = useState([]);

const searchHandler = (searchTerm)=>{
  // console.log(searchTerm);
  setSearchTerm(searchTerm);
  if(searchTerm !== ""){
    const newContactList = contacts.filter((contact) =>{
     return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase())
    });
    setSearchResults(newContactList);
  }
  else{
    setSearchResults(contacts);
  }
};

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
    // console.log(contact);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts)
    setContacts(retriveContacts);
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts])

  return (
    <>
      <BrowserRouter>
      <Navbar term={seatchTerm} searchKeyword={searchHandler}  />
      <Header />
        <div className=' ui container'>
          
        <Routes>
          <Route exact path="/" element={<ContactList contacts={seatchTerm.length < 1? contacts : searchResults} getContactId={removeContactHandler} />}></Route>
          <Route exact path="/add-contact" element={<AddContact addContactHandler = {addContactHandler} />}></Route>
          <Route exact path='/contact/:id' element={<ContactDetail />}></Route>
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
