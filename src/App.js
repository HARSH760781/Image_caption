import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header.js";
import Main from "./component/Main/main";
import About from "./component/pages/About";
import Service from "./component/pages/Service";
import Contact from "./component/pages/Contact.js";
import Signup from "./component/pages/Signup.js";
import Login from "./component/pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Comments from "./component/pages/Comments";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <>
        <Header isLoggedIn={isLoggedIn} />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/comments" element={<Comments />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route
            exact
            path="/login"
            element={
              <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }
          />
          {/* <Redirect to="/" /> Redirect to Main component by default */}
        </Routes>
        <ToastContainer />
      </>
    </Router>
  );
}

export default App;
