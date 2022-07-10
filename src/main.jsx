import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider, QueryClient } from "react-query";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const query = new QueryClient({});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <QueryClientProvider client={query}>
      <React.StrictMode>
         <App />
      </React.StrictMode>
   </QueryClientProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
