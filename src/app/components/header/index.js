import React from "react";
import Search from "./Search";

const Header = () => {
  return (
    <div className="flex justify-center absolute top-2 z-10 w-screen left-0 right-0">
      <Search />
    </div>
  );
};

export default Header;
