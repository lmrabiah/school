import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const AuthButtonStyled = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;

  border-bottom-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: #ededed;

  color: black;
  font-family: sans-serif;

  border-color: black;
  &:hover {
    background-color: #ab4e52;
    border-color: black;
    color: #f1f1f1;
  }
`;

export const Tabledata = styled.p`
  text-align: center;

  font-family: sans-serif;
  font-size: 18px;
`;
