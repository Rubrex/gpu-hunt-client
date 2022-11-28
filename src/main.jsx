import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App";
import AuthProvider from "./contexts/AuthProvider";
import ProductProvider from "./contexts/ProductProvider";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ProductProvider>
          <Toaster />
          <App />
        </ProductProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
