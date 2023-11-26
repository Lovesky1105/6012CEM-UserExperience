import React, { useState } from 'react'
import "./home.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Header from '../header/Header';


export const Home = () => {


  const [connected, setConnected] = useState(false);

  const toggleConnection = () => {
    setConnected(!connected);
  };

  const [connected2, setConnected2] = useState(false);

  const toggleConnection2 = () => {
    setConnected2(!connected2);
  };

  const [connected3, setConnected3] = useState(false);

  const toggleConnection3 = () => {
    setConnected3(!connected3);
  };



  return (
    <div>
      
      <div className="jumbotron">
        <h1 className="display-4">Hello, User!</h1>
        <p className="lead">
          Enjoy using this application
          </p>
      </div>

      <div className='container'>
      <h1 className="display-4">Machine Connector</h1>
      <Link to="/addmachine"> {/* Use Link to navigate */}
      <Button variant="outline-primary" >Add New Machine</Button>
      </Link>
      </div>

      <div className='container'>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Feeder Machine 1</Card.Title>
        <Card.Text>
          Location : Living Room
          {connected ? ' Connected' : ' Disconnected'}
        </Card.Text>
        <Button
            variant={connected ? 'danger' : 'primary'}
            onClick={toggleConnection}
          >
            {connected ? 'Disconnect' : 'Connect'}
          </Button>
          </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Feeder Machine 2</Card.Title>
        <Card.Text>
          Location : Play Room
          {connected2 ? ' Connected' : ' Disconnected'}
        </Card.Text>
        <Button
            variant={connected2 ? 'danger' : 'primary'}
            onClick={toggleConnection2}
          >
            {connected2 ? 'Disconnect' : 'Connect'}
          </Button>
          </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Feeder Machine 3</Card.Title>
        <Card.Text>
          Location : House Backyard
          {connected3 ? ' Connected' : ' Disconnected'}
        </Card.Text>
        <Button
            variant={connected3 ? 'danger' : 'primary'}
            onClick={toggleConnection3}
          >
            {connected3 ? 'Disconnect' : 'Connect'}
          </Button>
          </Card.Body>
    </Card>

    </div>
    </div>
  );
};


