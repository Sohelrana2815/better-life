import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Layouts/Routes";
import ThemeProvider from "./Providers/ThemeProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <React.StrictMode>
      <div className="max-w-7xl mx-auto ">
        <RouterProvider router={router} />
      </div>
    </React.StrictMode>
  </ThemeProvider>
);
