import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'; 


function Login() {
  return (
    <div>
        
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username :</Form.Label>
        <Form.Control type="text" placeholder="Enter your username" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password :</Form.Label>
        <Form.Control type="password" placeholder="Enter your password" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <dev className="container">
        <p>Dont have account?</p>
        <Link to="/register"> {/* Use Link to navigate */}
      <Button variant="outline-warning" >register</Button>
      </Link>
      </dev>
      
      <Link to="/home"> {/* Use Link to navigate */}
      <Button variant="outline-success" >Login</Button>
      </Link>
    </Form>

    </div>
  )
}

export default Login