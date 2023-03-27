import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider as Provider } from "react-query";
import { App } from "./App";
import { queryClient } from "./services/queryClient";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Provider client={queryClient}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
