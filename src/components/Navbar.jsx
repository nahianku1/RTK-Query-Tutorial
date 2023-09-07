import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-lime-300 px-[10px] flex gap-3 items-center font-bold ">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/RTKQuery">RTKQuery</NavLink>
    </div>
  );
}

export default Navbar;
