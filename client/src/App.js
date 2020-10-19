import React, { useEffect } from "react";

// Redux
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>app js</h1>
      </div>
    </Provider>
  );
};

export default App;
