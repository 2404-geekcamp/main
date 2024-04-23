import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';

import SignIn from './pages/auth/SignIn';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route render={() => <p>Page not found.</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
