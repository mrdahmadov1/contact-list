import React, { useState } from "react";
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
      <ListGroup>
        {filtered.map((contact, index) => (
          <ListGroupItem key={index}>
            <ListGroupItemHeading>{contact.fullName}</ListGroupItemHeading>
            <ListGroupItemText>{contact.phoneNumber}</ListGroupItemText>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}

export default List;
