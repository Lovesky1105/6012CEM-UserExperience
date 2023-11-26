import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/header/Header'
import { Home } from './components/home/Home';
import Schedule from './components/schedule/Schedule';
import  Foodlvl  from './components/foodlvl/Foodlvl';
import  Notification  from './components/notification/Notification';
import Profile  from './components/profile/Profile';
import Addmachine from './components/addmachine/Addmachine';
import Addschedule from './components/addschedule/Addschedule';
import Editprofile from './components/editprofile/Editprofile';
import Login from './components/account/Login';
import Register from './components/account/Register';
import Welcome from './components/account/Welcome';

import { Routes, Route, useNavigate} from 'react-router-dom';

const AuthLayout = ({ children }) => {
  return <div>{children}</div>;
};

function App() {
  const navigate = useNavigate();

  const shouldShowNavBar = () => {
    const restrictedRoutes = ['/login', '/register', '/'];
    return !restrictedRoutes.includes(window.location.pathname);
  };

  
  return (
    <div >
      {shouldShowNavBar() && <Header />}
      
      <Routes>
          <Route path="/" Component={Welcome} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
        

        <Route path='/home' Component={Home}/>
        <Route path='/schedule' Component={Schedule}/>
        <Route path='/foodlvl' Component={Foodlvl}/>
        <Route path='/notification' Component={Notification}/>
        <Route path='/profile' Component={Profile}/>
        <Route path='/addmachine' Component={Addmachine}/>
        <Route path='/addschedule' Component={Addschedule}/>
        <Route path='/editprofile' Component={Editprofile}/>
      
      </Routes>
      
      
    </div>
  )
}

export default App