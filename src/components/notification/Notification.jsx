import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Header from '../header/Header';

function Notification() {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">Notification</h1>
        <p className="lead">
          Below is your Notification list :
          </p>
      </div>

      <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Title : Feed successfully</div>
          Message   : Feeding started successfully
          <br/>
          Machine ID : 1
          <br/>
          Time : 8 AM
        </div>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
        <div className="fw-bold">Title : Feed successfully</div>
          Message   : Feeding started successfully
          <br/>
          Machine ID : 2
          <br/>
          Time : 1 PM
        </div>
      </ListGroup.Item>
      </ListGroup>

    </div>
  )
}

export default Notification
