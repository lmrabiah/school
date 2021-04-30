import React from "react";
import { AuthButtonStyled } from "../../styles";
import { Link } from "react-router-dom";

const AddCourseButton = () => {
  return (
    <div align="center">
      <Link to="addcourse">
        <AuthButtonStyled>اضافة فصل جديد</AuthButtonStyled>
      </Link>
    </div>
  );
};

export default AddCourseButton;
