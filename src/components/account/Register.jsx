import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'; 

function Register() {
  return (
    <div >
        
        <Form>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Machine ID:</Form.Label>
        <Form.Control type="text" placeholder="Enter your first Machine ID" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="text" placeholder="Enter your username" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Machine ID:</Form.Label>
        <Form.Control type="time" placeholder="Enter the time" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password :</Form.Label>
        <Form.Control type="password" placeholder="Enter your account password" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <dev className="container">
        <p>Have Account Already?</p>
        <Link to="/login"> {/* Use Link to navigate */}
      <Button variant="outline-warning" >Login</Button>
      </Link>
      </dev>
      
      <Link to="/home"> {/* Use Link to navigate */}
      <Button variant="outline-success" >Register</Button>
      </Link>
    </Form>

    </div>
  )
}

export default Register