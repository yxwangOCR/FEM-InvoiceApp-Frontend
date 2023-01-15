import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AuthProvider from "./AuthProvider";
import queryClient from "./queryClient";
import ThemeProvider from "./ThemeProvider";

const AppProviders: React.FC<Props> = ({ children }) => (
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <BrowserRouter>{children}</BrowserRouter>
        <ToastContainer
          autoClose={500}
          closeOnClick
          position="top-right"
          theme="light"
        />
      </ThemeProvider>
    </QueryClientProvider>
  </AuthProvider>
);

interface Props {
  children: React.ReactElement;
}

export default AppProviders;
