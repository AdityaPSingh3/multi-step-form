import React from "react";
import { Form, FormGroup, Label, Input, FormFeedback } from "reactstrap";

const Step2 = ({ formData, handleChange, errors }) => {
  return (
    <Form>
      <h2>Address Information</h2>
      <FormGroup>
        <Label for="address1">Address Line 1</Label>
        <Input
          type="text"
          name="address1"
          id="address1"
          value={formData.address1}
          onChange={handleChange}
          invalid={!!errors.address1}
        />
        <FormFeedback>{errors.address1}</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="address2">Address Line 2</Label>
        <Input
          type="text"
          name="address2"
          id="address2"
          value={formData.address2}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="city">City</Label>
        <Input
          type="text"
          name="city"
          id="city"
          value={formData.city}
          onChange={handleChange}
          invalid={!!errors.city}
        />
        <FormFeedback>{errors.city}</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="state">State</Label>
        <Input
          type="text"
          name="state"
          id="state"
          value={formData.state}
          onChange={handleChange}
          invalid={!!errors.state}
        />
        <FormFeedback>{errors.state}</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="zipCode">Zip Code</Label>
        <Input
          type="text"
          name="zipCode"
          id="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          invalid={!!errors.zipCode}
        />
        <FormFeedback>{errors.zipCode}</FormFeedback>
      </FormGroup>
    </Form>
  );
};

export default Step2;
