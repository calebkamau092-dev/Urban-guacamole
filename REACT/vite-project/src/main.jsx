import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AmazonPage from "./AmazonPage/index.jsx"
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AmazonPage />
  </StrictMode>
);