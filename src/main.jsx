import React from "react";
import ReactDOM from "react-dom/client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Providers/AuthProvider.jsx";
import PlayProvider from "./Providers/PlayProvider.jsx";
import router from "./Routes/router.jsx";
import "./index.css";
// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <PlayProvider>
          <RouterProvider router={router} />
        </PlayProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
