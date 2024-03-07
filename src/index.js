import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { store } from "./redux/Store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom"
import { Toaster } from "react-hot-toast";
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <BrowserRouter>
    <Provider store={store}>
      <Auth0Provider domain="gabrielsuarez.us.auth0.com" clientId="Oun2SbTo9HuHf5tymPIhAMiBuCEg9dhW" redirectUri={window.location.origin}>
        <App />
      </Auth0Provider>
      <Toaster />
    </Provider>
  </BrowserRouter>

);
