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
      <Auth0Provider 
        domain={process.env.AUTH0_DOMAIN} 
        clientId={process.env.AUTH0_CLIENT_ID} 
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
      <Toaster />
    </Provider>
  </BrowserRouter>

);
