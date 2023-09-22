import React from "react";
import ReactDOM from "react-dom/client";
import "slick-carousel/slick/slick.css";
import { Provider } from "react-redux";
import { store } from "./components/redux/Store.jsx";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
