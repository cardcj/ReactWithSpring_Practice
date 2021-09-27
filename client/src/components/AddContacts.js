import React, { useState } from 'react';

const AddContacts = (props) => {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setContact({...contact, [name]: value});
  }

  const submitContact = (e) => {
    e.preventDefault();

    fetch('http://localhost:8080/api/contacts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(contact),
    }).then((response) => {
      if(response.status === 200) {
        props.refetch();
      }
    });

    setContact({
      firstName: "",
      lastName: "",
      email: "",
    });
  }

  return(
      <div className="row">
        <form className="col s12" onSubmit={submitContact}>
          <div className="row">
            <div className="input-field col s6">
              <input name="firstName" onChange={handleChange} type="text" className="validate" value={contact.firstName} />
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-field col s6">
              <input name="lastName" onChange={handleChange} type="text" className="validate" value={contact.lastName}  />
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input name="email" onChange={handleChange} type="email" className="validate" value={contact.email} />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <button className="waves-effect waves-light btn" type="submit" name="action">Submit</button>
          </div>
        </form>
    </div>
  );
}

export default AddContacts;
