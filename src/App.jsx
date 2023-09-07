import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  return (
    <>
    <SkeletonTheme baseColor="lightgrey" highlightColor="white">

      <Navbar />
      <div className="px-[50px] py-10 ">
        <Outlet />
      </div>
    </SkeletonTheme>
    </>
  );
}

export default App;
