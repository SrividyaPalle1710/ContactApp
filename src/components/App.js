import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetails from "./ContactDetails";

function App()
{
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) =>
  {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };
  const removeContactHandler = (id) =>
  {
    const newContactList = contacts.filter((contact) =>
    {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() =>
  {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);
  useEffect(() =>
  {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="ui container">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" exact Component={(props) => <ContactList {...props}
            contacts={contacts} getContactId={removeContactHandler} />} />
          {/* <Route path="/" exact Component={ContactList} contacts={contacts} getContactId={removeContactHandler} /> */}

          <Route path="/add" exact Component={(props) => <AddContact {...props}
            addContactHandler={addContactHandler} />} />
          <Route path="/contact/:id" Component={ContactDetails} />
        </Routes>
        {/* <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler}></ContactList> */}
      </Router>

    </div>
  );
}

export default App;
