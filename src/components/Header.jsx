import React from "react";

const Header = () => (
  <header className="fixed top-0 w-full bg-white shadow z-50 flex items-center gap-3 p-3">
    <div className="w-10 h-10 bg-yellow-600 text-white flex items-center justify-center rounded-full font-bold">
      E
    </div>
    <h1 className="font-bold text-yellow-600 flex-1">Emperor Mobile Store</h1>
    <a href="#contact" className="text-yellow-600 font-bold">
      تماس
    </a>
  </header>
);

export default Header;
