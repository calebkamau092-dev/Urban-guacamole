import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Props from "./Props"
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Props />
  </StrictMode>
);