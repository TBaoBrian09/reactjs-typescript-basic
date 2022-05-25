import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ThemeContextProvider from "./context/ThemeContext";
import ProgressContextProvider from "./context/ProgressContext";
import MovieContextProvider from "./context/MovieContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MovieContextProvider>
      <ThemeContextProvider>
        <ProgressContextProvider>
          <App />
        </ProgressContextProvider>
      </ThemeContextProvider>
    </MovieContextProvider>
  </React.StrictMode>
);
