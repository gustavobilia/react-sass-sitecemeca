import React from 'react';
import Home from "./pages/home/Home";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './scss/main.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App