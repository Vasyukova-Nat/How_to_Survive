import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/Error.jsx";

//import { useState, useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/firstaid",
        element: <App />,
      },
      {
        path: "/animals",
        element: <App />,
      },
      {
        path: "/callhelp",
        element: <App />,
      },
      {
        path: "/about-us",
        element: <App />,
      },
      {
        path: "/contacts",
        element: <App />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
