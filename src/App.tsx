import React from 'react';

import Header from './layouts/Header';
import Router from "./layouts/Router";
import Footer from "./layouts/Footer";

import Main from './components/main';

import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;