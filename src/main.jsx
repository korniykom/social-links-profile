import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import Card from "./Card";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="flex h-dvh w-dvw items-center justify-center bg-[#141414]">
      <Card></Card>
    </div>
  </StrictMode>,
);
