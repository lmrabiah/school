import React from "react";
import { AuthButtonStyled } from "../../styles";
import { Link } from "react-router-dom";

const SignupButton = () => {
  return (
    <>
      <Link to="signup">
        <AuthButtonStyled>Sign up</AuthButtonStyled>
      </Link>
    </>
  );
};

export default SignupButton;
