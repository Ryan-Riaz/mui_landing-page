import { CssBaseline } from "@material-ui/core";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";

const rootEl = document.querySelector("#root");

ReactDOM.render(
    <StrictMode>
        <CssBaseline />
        <App />
    </StrictMode>,
    rootEl
);
