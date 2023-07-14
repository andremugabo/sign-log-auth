import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./store/reducers";
import App from "./App";

const store = createStore(reducer);

const TodoListApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent("TodoListApp", () => TodoListApp);
