import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import HomePage from "./pages/home/HomePage.jsx";
import RegisterPage from "./pages/register/RegisterPage.jsx";
import LoginPage from "./pages/login/LoginPage.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <LoginPage />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
