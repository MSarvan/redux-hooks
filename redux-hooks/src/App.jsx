import { Children, useState } from "react";
import "./App.css";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";

const PrivateRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  const isAuthenticated = false; // this needs to update from the redux part

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
