import React from "react";
import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Kalkulator povrata ulaganja</h1>
      </header>
    </div>
  );
}
