import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";

import { SoftUIControllerProvider } from "context";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <SoftUIControllerProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </SoftUIControllerProvider>
  </BrowserRouter>
);
