import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Use 'react-dom/client' instead of 'react-dom'
import App from "./App";
import "./styles.css"; // Import global styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
