import { render } from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import ApolloProvider from "./ApolloProvider";

render(ApolloProvider, document.getElementById("root"));

serviceWorker.register();
