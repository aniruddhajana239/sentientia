import React from 'react';
import Header from './components/Header';
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import "./scss/style.scss";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Services" element={<Services />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Error" element={<Error />} />
      </Routes>
    </>
  )
}

export default App;