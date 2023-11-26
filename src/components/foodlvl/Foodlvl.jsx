import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Header from '../header/Header';


function Foodlvl() {
  return (
    <div>
    <div className="jumbotron">
      <h1 className="display-4">Food level </h1>
      <p className="lead">
        Below is your mechine remain food level list :
        </p>
    </div>

    <div className='container'>
    <h1 className="display-4">Food level List</h1>
    </div>

    <ListGroup as="ol" numbered>
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">Machine ID : 1</div>
        Food level remain : 75%
        <br/>
        Location : Living Room
      </div>
      
    </ListGroup.Item>

    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">Machine ID : 2</div>
        Food level remain : 55%
        <br/>
        Location : Play Room
      </div>
      
    </ListGroup.Item>

    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">Machine ID : 3</div>
        Food level remain : 25%
        <br/>
        Location : House Backyard
      </div>
      
    </ListGroup.Item>

  </ListGroup>

  </div>
  )
}

export default Foodlvl
