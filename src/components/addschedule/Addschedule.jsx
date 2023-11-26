import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Header from '../header/Header';

function Addschedule() {
    const submitSuccessfully = () => {
        alert('Successfully Add A New Schedule!');
      };

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
        <Form.Label>Select the time your want to feed :</Form.Label>
        <Form.Control type="time" placeholder="Enter the time" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <div className='container'>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Food amount</Card.Title>
        <Card.Text>
          100g
        </Card.Text>
        <Button>
            Select
          </Button>
          </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Food amount</Card.Title>
        <Card.Text>
          200g
        </Card.Text>
        <Button>
            Select
          </Button>
          </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Food amount</Card.Title>
        <Card.Text>
          300g
        </Card.Text>
        <Button>
            Select
          </Button>
          </Card.Body>
    </Card>

    </div>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Other food amount :</Form.Label>
        <Form.Control type="text" placeholder="Enter Other food amount" />
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
    <Alert variant="primary">
      <Alert.Heading>Successfully submitted</Alert.Heading>
      <p>You have successfully added a new machine.</p>
    </Alert>
  );
}

export default Addschedule