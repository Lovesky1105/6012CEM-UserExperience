import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from '../header/Header';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

function Editprofile() {
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
        <Form.Label>Name :</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username :</Form.Label>
        <Form.Control type="text" placeholder="Enter your new Username" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email :</Form.Label>
        <Form.Control type="text" placeholder="Enter your new email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Profile Image :</Form.Label>
        <Form.Control type="file" placeholder="Enter your new profile image" />
        <Form.Text className="text-muted">
        </Form.Text>
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
  )
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
    <div>
    <Alert variant="primary">
      <Alert.Heading>Successfully submitted</Alert.Heading>
      <p>You have successfully edit your profile.</p>
    </Alert>
    </div>
  );
}

export default Editprofile