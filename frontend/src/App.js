import React from "react";
import { Provider } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Tour from "./pages/Tour";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Payments from "./pages/Payments";
// import DataComponent from "./components/DataComponent";
import Reservation from "./pages/Reservation";
import "../src/App.css";
import { useState } from 'react';
import User from "./components/User";
// import SessionCheck from "./components/SessionCheck";
import store from './store';

function App() {

  const [currUser, setCurrUser] = useState(null);

  return (
    <Provider store={store}>
      <>
        <div className="App">
          <User currUser={currUser} setCurrUser={setCurrUser} />
        </div>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route index element={<Tour />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="payments" element={<Payments />} />
          <Route path="reservation" element={<Reservation />} />
        </Routes>
        <div>
          <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Copyright: PROYECTO LIGHTHOUSE </p>
          </footer>
        </div>
        {/* <SessionCheck /> */}
      </>
    </Provider>
  );
}

export default App;
