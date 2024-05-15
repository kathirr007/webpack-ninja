import React from "react";
import "./App.scss";
import { Routes, Route, Redirect, Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login/login.jsx";
import Movies from "./Pages/Movies/Movies.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/login/",
    element: <Login />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
]);

{/* <RouterProvider router={router} /> */}

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
