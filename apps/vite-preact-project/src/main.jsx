import { render } from "preact";
import { App } from "./app";
import "./index.css";
import setupLocatorUI from "@amirrezadev1378/runtime";

if (process.env.NODE_ENV === "development") {
  setupLocatorUI();
}

render(<App />, document.getElementById("app"));
