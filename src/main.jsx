import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";

// Optional: CaseStudy (uncomment when needed)
import CaseStudy from "./components/CaseStudy";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        {/* Example route */}
        <Route path="/case-study" element={<CaseStudy />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);