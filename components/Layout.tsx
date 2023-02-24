import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="flex w-full">
      <Header />
      {children}
    
    </div>
  );
}

export default Layout;
