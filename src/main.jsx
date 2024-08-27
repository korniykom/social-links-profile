import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import Card from "./Card";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <main className="flex h-dvh items-center justify-center">
      <Card />
    </main>
  </StrictMode>,
);
