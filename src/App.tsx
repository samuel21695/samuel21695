import React from 'react';

import Header from './layouts/Header';
import Router from "./components/Router";
import Footer from "./layouts/Footer";


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