import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import RTKQuery from "./components/RTKQuery.jsx";

import { ApiProvider } from '@reduxjs/toolkit/query/react';
import baseApi from "./app/baseApi.js";

let router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/RTKQuery" element={<RTKQuery />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApiProvider api={baseApi}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </ApiProvider>
);
