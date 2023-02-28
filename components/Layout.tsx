import React from "react";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="flex w-full">

      {children}
    </div>
  );
}

export default Layout;
