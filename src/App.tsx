import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<React.Suspense children={<Home />} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
