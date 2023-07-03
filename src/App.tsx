import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage'
import Navbar from './components/Layout/Navbar';
import "./App.css";
// other imports

const App: React.FC = () => {
  return (
      <Router>
    <div className='App'>
      <Navbar/>
        <Routes>
          {/* your other routes */}
          <Route path='/home' Component={HomePage} />
          <Route path='' Component={NotFoundPage} />
        </Routes>
    </div>
      </Router>
  );
};

export default App;

