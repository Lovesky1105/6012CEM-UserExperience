import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; 
import Header from '../header/Header';

function Schedule() {

  const deleteButton = () => {
    alert('Successfully Deleted! ');
  };

  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">Schedule</h1>
        <p className="lead">
          Below is your schedule list :
          </p>
      </div>

      <div className='container'>
      <h1 className="display-4">Schedule List</h1>
      <Link to="/addschedule"> {/* Use Link to navigate */}
      <Button variant="outline-primary" >Add New Schedule</Button>
      </Link>
      </div>

      <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Morning session</div>
          Time   : 8am 
          <br/>
          Amount : 200g
        </div>
        <Button variant="outline-danger" onClick={deleteButton}>
           DELETE
          </Button>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
        <div className="fw-bold">Afternoon session</div>
          Time   : 1pm 
          <br/>
          Amount : 250g
        </div>
        <Button variant="outline-danger" onClick={deleteButton}>
           DELETE
          </Button>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
        <div className="fw-bold">Evening session</div>
          Time   : 7pm 
          <br/>
          Amount : 150g
        </div>
        <Button variant="outline-danger" onClick={deleteButton}>
           DELETE
          </Button>
      </ListGroup.Item>

    </ListGroup>

    </div>
  )
}

export default Schedule