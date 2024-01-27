import React from 'react';

import Header from './components/Header';
import Router from "./components/Router";
import Footer from "./components/Footer";


import "./App.css";

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Router />
      <Footer />
    </div>
  );
};

export default App;