import React from "react";

import { observer } from "mobx-react";

import Routes from "./component/Routes";
import NavBar from "./component/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes />
    </div>
  );
}
export default observer(App);
