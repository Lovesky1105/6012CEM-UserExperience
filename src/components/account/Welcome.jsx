import React from 'react'
import "./account.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'; 

function Welcome() {
  return (
    <div>
        
        <div className="jumbotron">
        <h1 className="display-4">Hello, User!</h1>
        <p className="lead">
          Welcome to Grand feeder Controller
          </p>
      </div>

      <Form>
        <p>Have account already?</p>
      <Link to="/login"> {/* Use Link to navigate */}
      <Button variant="outline-primary" >Login</Button>
      </Link>
      <br/>
      <p>Don't have account ?</p>
      <Link to="/register"> {/* Use Link to navigate */}
      <Button variant="outline-primary" >Register</Button>
      </Link>
    </Form>

    </div>
  )
}

export default Welcome