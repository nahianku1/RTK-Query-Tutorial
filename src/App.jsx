import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="px-[50px] py-10 ">
        <Outlet />
      </div>
    </>
  );
}

export default App;
