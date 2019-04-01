import React from "react";
import ReactDOM from "react-dom";


import reducers from "./Reducers";

//middlewares
import thunk from "redux-thunk";
import promise from "redux-promise";

//redux
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";



import PersonList from "./components/personDetails";

const createStoreWithMiddleware = applyMiddleware(thunk, promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
   <PersonList/>
  </Provider>,

  document.getElementById("root")
);