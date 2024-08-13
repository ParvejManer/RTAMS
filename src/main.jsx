import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline } from "@mui/material";
import CreateRouter from "./Router/CreateRouter";
import {  RouterProvider } from "react-router-dom";
// import Router from './Router/Router.jsx'
// import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <RouterProvider router={CreateRouter} />
  </React.StrictMode>
);
