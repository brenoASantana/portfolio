//React
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import styles from "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode className={styles}>

    <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/7AnAf9SQOqVhFhfh7Cd8LI?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    <App />
  </React.StrictMode>
);
