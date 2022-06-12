// pages
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import Dashboard from './pages/dashboard'
import React, { useContext} from 'react';




//styled component
import {StyledContainer} from './component/style';

import{
  BrowserRouter as Router,
  Routes,
  Route
}from 'react-router-dom';


//auth and redux
import AuthRoute from './component/AuthRoute';
import BasicRoute from './component/BasicRoute';
import {connect} from 'react-redux'
import {useState} from 'react'
//import { loggedin} from './auth/actions/userAction'



function App({checked}) {
  return (
    <Router>
      {checked && 
    <StyledContainer>
      <Routes>
        <Route element={<BasicRoute/>}>
      <Route path="/" element={<Home/>} />
      
      <Route path="/register" element={<Register/> } />      
      <Route path="/login" element={<Login/>} /> 
      </Route>
      <Route element={<AuthRoute />}>
      <Route path="/dashboard" element={<Dashboard/>} />
      </Route>
      </Routes>      
    </StyledContainer>
    }
    </Router>
  );
}

const mapStateToProps = ({session}) => ({
  checked : session.checked,
})

export default connect(mapStateToProps)(App);
