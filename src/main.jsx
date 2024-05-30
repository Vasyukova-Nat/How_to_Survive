import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Loader from "./pages/Loader/Loader.jsx";
import Error from "./pages/Error/Error.jsx";
import ScrollProgressBar from "./components/ScrollProgressBar/ScrollProgressBar";

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
    errorElement: <Error />,
    loader: async () => {
      return <Loader />;
    },
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="app">
      <ScrollProgressBar />
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  </React.StrictMode>
);
