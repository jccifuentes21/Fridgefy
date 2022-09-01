import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./store/auth-context";
import { FilterContextProvider } from "./store/filters-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <FilterContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </FilterContextProvider>
  </BrowserRouter>
);
