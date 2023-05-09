import React from "react";
import { Link, Outlet } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <Menu />
      <Outlet />
    </div>
  );
};

export default App;
