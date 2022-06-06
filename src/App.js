// pages
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import Dashboard from './pages/dashboard'

//styled component
import {StyledContainer} from './component/style';

import{
  BrowserRouter as Router,
  Routes,
  Route
}from 'react-router-dom';




function App() {
  return (
    
    <Router>
    <StyledContainer>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>      
    </StyledContainer>
    </Router>
  );
}

export default App;
