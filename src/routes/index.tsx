import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from '../pages/About/About';
import Home from '../pages/Home/Home';

export default () => {
  return (
    <Router>
      <Routes>
      <Route path={'/'}  element={<Home />} />
        <Route path={'/home'}  element={<Home />} />
        <Route path={'/about'}  element={<About />} />
      </Routes>
    </Router>
  );
};
