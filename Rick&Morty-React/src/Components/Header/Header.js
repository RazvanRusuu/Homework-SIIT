import React from "react";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img
        className="img img-rick"
        src="https://i.ibb.co/wgfhFV9/rick.png"
        alt="rick"
      />
      <img
        className="logo"
        src="https://i.ibb.co/PMtgKhp/rick-And-Morty.png"
        alt="rick and morty text"
      />
      <img
        className="img img-morty"
        src="https://i.ibb.co/YjdVGcd/morty.png"
        alt="morty"
      />
    </header>
  );
}

export default Header;
