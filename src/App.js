import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import DetailPage from './components/DetailPage';
import Navbar from './components/Navbar';
function App() {
  return (

    <Router>
       <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/item/:id" element={<DetailPage/>} />
      </Routes>
    </Router>

  );
}

export default App;
