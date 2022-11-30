import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const initialValue = { fullName: "", phoneNumber: "" };
function MyForm({ addContact, contacts }) {
  const [form, setForm] = useState({ initialValue });

  useEffect(() => {
    setForm(initialValue);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!form.fullName || !form.phoneNumber) {
      return false;
    }

    addContact([...contacts, form]);
    console.log(form);
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label for="fullName">Full Name</Label>
        <Input
          type="text"
          name="fullName"
          id="fullName"
          onChange={onChangeInput}
          placeholder="John Wick"
          value={form.fullName || ""}
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Phone Number</Label>
        <Input
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          onChange={onChangeInput}
          placeholder="+777 77 777 7777"
          value={form.phoneNumber || ""}
        />
      </FormGroup>
      <Button color="primary">Add Contact</Button>
    </Form>
  );
}

export default MyForm;
