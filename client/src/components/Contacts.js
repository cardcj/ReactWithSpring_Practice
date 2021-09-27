import React, { useState, useEffect } from 'react';
import SingleContact from './SingleContact';
import AddContacts from './AddContacts';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const getContacts = () => {
    fetch('http://localhost:8080/api/contacts')
      .then((response) => response.json())
      .then((data) => setContacts(data));
  }

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div>
      <div className="row">
        <AddContacts refetch={getContacts} />
      </div>
      <div className="row">
        {
          contacts.map((item) => <SingleContact key={item.id} item={item} />)
        }
      </div>
    </div>
  )
}

export default Contacts;
