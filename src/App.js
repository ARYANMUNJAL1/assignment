import Navbar from './navbar.js';
import Login from './login.js';
import Signup from './Signup.js';
import {Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <Signup />
      
      <Routes>
        <Route path="Home" element={<Login />}/>
        <Route path="navbar" element={<Navbar />}/>
      </Routes>
    

    </>
  );
}

export default App;
