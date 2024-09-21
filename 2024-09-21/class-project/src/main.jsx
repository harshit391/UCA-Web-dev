import { createRoot } from "react-dom/client";

// IF Export Defaults Used
// import App from "./App";

// If export function App is Used
import {app as App} from "./app";

const reactProjectRoot = createRoot(document.getElementById("root"));

reactProjectRoot.render(<App />)