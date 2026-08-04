import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ClickMe from "./StateAndEvents/ClickMe.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClickMe />
  </StrictMode>
);