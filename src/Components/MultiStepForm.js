import React, { useState, useEffect } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { Container, Button } from "reactstrap";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validate = () => {
    let tempErrors = {};
    if (currentStep === 1) {
      if (!formData.name) tempErrors.name = "Name is required";
      if (!formData.email) tempErrors.email = "Email is required";
      if (!/\S+@\S+\.\S+/.test(formData.email))
        tempErrors.email = "Email is invalid";
      if (!formData.phone) tempErrors.phone = "Phone is required";
    } else if (currentStep === 2) {
      if (!formData.address1)
        tempErrors.address1 = "Address Line 1 is required";
      if (!formData.city) tempErrors.city = "City is required";
      if (!formData.state) tempErrors.state = "State is required";
      if (!formData.zipCode) tempErrors.zipCode = "Zip Code is required";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const nextStep = () => {
    if (validate()) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <Container className="mt-5">
      <h1>Multi-Step Form</h1>
      <form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <Step1
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        )}
        {currentStep === 2 && (
          <Step2
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        )}
        {currentStep === 3 && <Step3 formData={formData} />}

        <div className="mt-4">
          {currentStep > 1 && (
            <Button
              type="button"
              onClick={prevStep}
              color="secondary"
              className="me-2"
            >
              Back
            </Button>
          )}
          {currentStep < 3 && (
            <Button type="button" onClick={nextStep} color="primary">
              Next
            </Button>
          )}
          {currentStep === 3 && (
            <Button type="submit" color="success">
              Submit
            </Button>
          )}
        </div>
      </form>
    </Container>
  );
};

export default MultiStepForm;
