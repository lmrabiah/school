import React from "react";
import authStore from "../stores/authStore";
import { FiLogOut } from "react-icons/fi";
import Courses from "./Courses";

function Home() {
  return (
    <div>
      <Courses />
    </div>
  );
}

export default Home;
