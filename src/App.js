import React from "react";
import Form from "./components/Form";
import List from "./components/List";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Form />
      <List />
    </Provider>
  );
}

export default App;
