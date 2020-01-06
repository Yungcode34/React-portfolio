import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/about/index.js'
import Contact from './components/contact/index'
import Hero from './components/hero/index'
import Work from './components/work/index'
import Footer from './components/footer/index'
import Home from './components/home/index'
import { BrowserRouter, Route, Switch } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
