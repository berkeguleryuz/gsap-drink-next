import Image from "next/image";
import React from "react";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 md:p-9 p-3">
      <Image
        src={"/images/nav-logo.svg"}
        alt="logo"
        width={100}
        height={100}
        className="md:w-24 w-20"
      />
    </nav>
  );
};

export default Nav;
