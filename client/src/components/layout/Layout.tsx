import React from "react";
import { Outlet } from "react-router";
import background from "../../resources/background.png";

export const Layout = () => {
  return (
    <div
      className="min-h-screen max-h-screen bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Outlet />
    </div>
  );
};
