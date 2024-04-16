import React, { useState } from "react";
import SideBar from "./sidebar/SideBar";
import Nav from "./nav/Nav";

const Layout = ({ children }) => {
  const [toggle, setToggle] = useState("true");

  return (
    <div className="flex w-full">
      <SideBar toggle={toggle} setToggle={setToggle} />
      <main className="overflow-y-auto h-screen w-full">
      <Nav
        toggle={toggle}
        setToggle={setToggle}
      />
      {children}
    </main>

    </div>
  );
};

export default Layout;
