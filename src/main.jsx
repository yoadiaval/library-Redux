import { Provider } from "react-redux";
import { store } from "./store/main.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
//import { ProviderBook } from "./context/Books";
import { NavigationProvider } from "./context/Navigation";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NavigationProvider> 
      <Provider store={store} >
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
  </NavigationProvider>
);
