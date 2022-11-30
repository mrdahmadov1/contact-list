import React, { useState } from "react";
import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([]);

  return (
    <>
      <List contacts={contacts} />
      <hr />
      <Form addContact={setContacts} contacts={contacts} />
    </>
  );
}

export default Contacts;
