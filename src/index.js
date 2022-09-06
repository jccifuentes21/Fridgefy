import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./store/auth-context";
import { FilterContextProvider } from "./store/filters-context";
import { UserContextProvider } from "./store/user-context";
import { ItemsToBuyContextProvider } from "./store/itemsToBuy-context";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ItemsToBuyContextProvider>
      <UserContextProvider>
        <FilterContextProvider>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </FilterContextProvider>
      </UserContextProvider>
    </ItemsToBuyContextProvider>
  </BrowserRouter>
);
