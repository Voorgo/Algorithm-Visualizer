import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import Root from "./pages/Root";
import Algo from "./pages/Algo";
import Info from "./pages/Info";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route
        index
        element={<Navigate to="/Algorithm-Visualizer" replace={true} />}
      />
      <Route path="/Algorithm-Visualizer" element={<Algo />} />
      <Route path="/info" element={<Info />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
