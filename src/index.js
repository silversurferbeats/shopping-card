import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { store } from "./redux/Store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom"
import { Toaster } from "react-hot-toast";
import { Auth0Provider } from "@auth0/auth0-react";
// require('dotenv').config();


const root = ReactDOM.createRoot(document.getElementById("root"));
console.log('variable -->',process.env.REACT_APP_AUTH0_CLIENT_ID)
root.render(

  <BrowserRouter>
    <Provider store={store}>
      <Auth0Provider 
        domain={process.env.REACT_APP_AUTH0_DOMAIN} 
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID} 
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
      <Toaster />
    </Provider>
  </BrowserRouter>

);
