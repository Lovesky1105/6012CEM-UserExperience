import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; 
import Header from '../header/Header';
import Img1 from '../../assets/image/petfeeder4.jpg'

function Profile() {
  return (
    <div>
      <div className="jumbotron">
    <h1 className="display-4">Profile</h1>
  </div>

  <div className='container'>
      <h1 className="display-4">Profile</h1>
      <Link to="/editprofile"> {/* Use Link to navigate */}
      <Button variant="outline-primary" >Edit Profile</Button>
      </Link>
      </div>

      
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">User Profile</h2>
              <img
                src={Img1}
                alt="User Profile"
                className="img-fluid rounded-circle mb-3"
              />
              <p className="card-text">Name: Gan Kah Xiang</p>
              <p className="card-text">User Name: Zack Gan</p>
              <p className="card-text">Email: kahxiang@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <Link to="/login"> {/* Use Link to navigate */}
      <Button variant="outline-success" >Logout</Button>
      </Link>

  </div>
  )
}

export default Profile