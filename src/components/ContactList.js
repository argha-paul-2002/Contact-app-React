import React from 'react'
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';
import Header from './Header';

export default function ContactList(props) {
  const deleteContactHandler =(id)=>{
    props.getContactId(id);
  }
  // console.log(props.contacts.length);
  const val = (props.contacts.length);
  

  const renderContactList = props.contacts.map((contact) =>{
    // console.log(val);
        return(
            val === 0?<Header />:<ContactCard contact={contact} key={contact.id} clickHandler={deleteContactHandler} />
        );
    })

  return (
    <div className="container">
      <div className="container">
          <div className="get-quote">
              <div className="row">
                  <div className="col-sm-10 col-12 p-0">
                      <p className='h2'>All Contact List</p>
                  </div>
                  <div className="col-sm-2 col-12">
                  <Link to="/add-contact">
                      <button type="button" className="btn btn-primary pull-right">Add contact</button>
                  </Link>
                  </div>
              </div>
          </div>
      </div>

      
      <div className="row my-4 d-flex justify-content-evenly">
        {val === 0?<h6>Nothing to preview. Please add Your contacts first</h6>:renderContactList}
      </div>
    </div>
  )
}
