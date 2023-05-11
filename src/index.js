import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { ListingProvider } from "./context/listingContext";

ReactDOM.render(
    <ListingProvider>
        <App />
    </ListingProvider>
, document.getElementById("root"));
