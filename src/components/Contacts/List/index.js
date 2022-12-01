import React, { useState } from "react";
import "./index.css";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((contact) => {
    return Object.keys(contact).some((key) =>
      contact[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });

  return (
    <div>
      <FormGroup>
        <Label for="filterText">Search</Label>
        <Input
          type="text"
          name="filterText"
          id="filterText"
          placeholder=""
          onChange={(e) => {
            setFilterText(e.target.value);
          }}
          value={filterText}
        />
      </FormGroup>
      <p className="m-0">Total Contacts ({filtered.length})</p>
      <ListGroup className="pt-3">
        {filtered.map((contact, index) => (
          <ListGroupItem className="listItem" key={index}>
            <ListGroupItemHeading>{contact.fullName}</ListGroupItemHeading>
            <ListGroupItemText className="textNumber">
              {contact.phoneNumber}
            </ListGroupItemText>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}

export default List;
