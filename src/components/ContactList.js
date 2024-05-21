import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) =>
{
    console.log(props, "props");
    const deleteContactHandler = (Id) =>
    {
        props.getContactId(Id);
    };

    const renderContactList = props.contacts.map((contact) =>
    {
        return <ContactCard contact={contact} clickhandler={deleteContactHandler} key={contact.Id} />

    });
    return (
        //wrapped in JSX fragment
        <><div class="main">
            <h2>
                Contact List
                <Link to="/add">
                    <button classname="ui button blue right">Add Contact</button>
                </Link>
            </h2>
        </div><div className="ui celled list">
                {renderContactList}
            </div></>
    );
};
export default ContactList;