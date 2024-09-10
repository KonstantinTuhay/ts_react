import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ParentCmpnt } from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ParentCmpnt />
  </StrictMode>
);
