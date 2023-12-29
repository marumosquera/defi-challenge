
//import libraries
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import components and views
import Error from "./views/Error";
import Home from "./views/Home/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
