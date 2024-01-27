import React from 'react';

import Header from './layouts/Header';
import Router from "./layouts/Router";
import Footer from "./layouts/Footer";

import Main from './components/main';

import "./App.css";

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;