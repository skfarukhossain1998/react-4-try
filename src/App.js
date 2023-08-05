import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import DetailPage from './components/DetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path="/item/:id" component={DetailPage} />
      </Routes>
    </Router>
  );
}

export default App;
