import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Generator from './components/Generator';
// import Login from '../Login.jsx';  
// import Generator from '../Generator.jsx';  

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />  {/* Login page route */}
        <Route path="/generator" element={<Generator />} />  {/* Generator page route */}
      </Routes>
      
    </Router>
  );
};

export default App;
