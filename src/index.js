import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import StarRating from "./StarRating";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
  </StrictMode>
);
