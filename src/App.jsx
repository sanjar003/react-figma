import React from "react";
import "./App.css";
import Main from "./compomets/Nav";
import Headers from "./compomets/Headers";
import Sectionmini from "../src/compomets/Sectionmini";
import Asidees from "./compomets/Aside"
import Articl from "./compomets/Articl"
import Footer from "./compomets/Footer"

const App = () => {
  return (
    <div>
      <Headers />
      <Main />
      <Sectionmini/>
      <Asidees/>
      <Articl/>
      <Footer/>
    </div>
  );
};

export default App;
