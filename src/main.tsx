import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import { Environment } from "./environment/environment.ts";
// const clientId = Environment.GG_CLIENT_ID;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      {/* <GoogleOAuthProvider clientId={clientId}> */}
      <App />
      {/* </GoogleOAuthProvider> */}
    </BrowserRouter>
  </StrictMode>
);
