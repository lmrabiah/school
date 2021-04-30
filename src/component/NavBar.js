import React from "react";
import { observer } from "mobx-react";

import { FiLogOut } from "react-icons/fi";
//styles
import SignupButton from "./buttons/SignupButton";
import SigninButton from "./buttons/SigninButton";
import authStore from "../stores/authStore";

///
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          {authStore.user ? (
            <>
              <FiLogOut
                onClick={authStore.signout}
                size="2em"
                color="#7F8778"
              />{" "}
              <h4>Hello, {authStore.user.username}</h4>
            </>
          ) : (
            <>
              <SigninButton />
              <SignupButton />
            </>
          )}

          <a className="nav-item "></a>
        </div>
      </div>
    </nav>
  );
};

export default observer(NavBar);
