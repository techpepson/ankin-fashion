import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./global-states/store.reducer.ts";
import { Theme } from "@radix-ui/themes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme accentColor="crimson">
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Theme>
  </React.StrictMode>
);
