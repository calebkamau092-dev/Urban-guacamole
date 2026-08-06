import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import StateAndEvents from "./StateAndEvents/StopWatch.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <StateAndEvents/>
  </StrictMode>
);