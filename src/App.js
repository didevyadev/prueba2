import React from "react";
import { Provider } from 'react-redux'
import store from './store'
import Personal from "./components/Personal";
import Registro from "./components/Registro";

const App = () =>(
  <Provider store = { store }>
  <div>
    <Personal />
    <Registro />
  </div>
  </Provider>
)

export default App;
