import React from 'react'
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';

export default function ContactList(props) {
  const deleteContactHandler =(id)=>{
    props.getContactId(id);
  }
    const renderContactList = props.contacts.map((contact) =>{
        return(
            <ContactCard contact={contact} key={contact.id} clickHandler={deleteContactHandler} />
        );
    })
  return (
    <div>
      <h2>
        Contact List
        <Link to="/add-contact">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h2>
      <div className="ui celled list">
      {renderContactList}
      </div>
    </div>
  )
}
