import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Layout from "./pages/Layout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Favourites from "./pages/Favourites";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Loader from "./components/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: <App />,
      },
      {
        path: "/favourites",
        index: true,
        element: <Favourites />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} fallbackElement={<Loader />} />
    </Provider>
  </React.StrictMode>
);
