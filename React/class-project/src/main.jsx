import { createRoot } from "react-dom/client";

// IF Export Defaults Used
// import App from "./App";

// If export function App is Used
import App from "./app";
import store from "./redux/stores";
import { Provider } from "react-redux";

const reactProjectRoot = createRoot(document.getElementById("root"));

reactProjectRoot.render(
    <Provider store={store}>
        <App />
    </Provider>
);
