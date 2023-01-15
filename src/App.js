/* src/App.js */
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import  NavBar  from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

const App = () => {

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <Footer />
    </div>

  );
};



export default App;
