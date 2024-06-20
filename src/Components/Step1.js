import React from "react";
import { Form, FormGroup, Label, Input, FormFeedback } from "reactstrap";

const Step1 = ({ formData, handleChange, errors }) => {
  return (
    <Form>
      <h2>Personal Information</h2>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          invalid={!!errors.name}
        />
        <FormFeedback>{errors.name}</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          invalid={!!errors.email}
        />
        <FormFeedback>{errors.email}</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="phone">Phone</Label>
        <Input
          type="text"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          invalid={!!errors.phone}
        />
        <FormFeedback>{errors.phone}</FormFeedback>
      </FormGroup>
    </Form>
  );
};

export default Step1;
