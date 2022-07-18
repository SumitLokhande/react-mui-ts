import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';

export default () => {
  return (
    <Router>
      <Routes>
        <Route path={'/'}  element={<Home />} />
      </Routes>
    </Router>
  );
};
