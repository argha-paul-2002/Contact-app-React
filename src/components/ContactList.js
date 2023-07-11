import React from 'react'
import ContactCard from './ContactCard';
import { v4 as uuidv4 } from 'uuid';

export default function ContactList(props) {

    const renderContactList = props.contacts.map((contact) =>{
        return(
            <ContactCard contact={contact} key={contact.id} />
        );
    })
  return (
    <div>
      <div className="ui celled list">
      {renderContactList}
      </div>
    </div>
  )
}
