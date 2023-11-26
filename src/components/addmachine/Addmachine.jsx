import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

function Addmachine() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleClick = () => {
    setLoading(true);

    // Simulate an API call with a delay
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Machine ID :</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Machine ID" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Machine Location :</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Machine Location" />
        </Form.Group>

        {loading && <Preloader />}
        {success && <SuccessPage />}
        {!loading && !success && (
          <Button variant="primary" onClick={handleClick} type="button">
            Submit
          </Button>
        )}
      </Form>
    </div>
  );
}

function Preloader() {
  return (
    <div>
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

function SuccessPage() {
  return (
    <Alert variant="primary">
      <Alert.Heading>Successfully submitted</Alert.Heading>
      <p>You have successfully added a new machine.</p>
    </Alert>
  );
}

export default Addmachine;