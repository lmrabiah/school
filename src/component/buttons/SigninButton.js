import React from "react";
import { AuthButtonStyled } from "../../styles";
import { Link } from "react-router-dom";

const SigninButton = () => {
  return (
    <>
      <Link to="signin">
        <AuthButtonStyled>Sign in</AuthButtonStyled>
      </Link>
    </>
  );
};

export default SigninButton;
