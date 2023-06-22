import React from "react";
/* import logo from "../assets/investment-calculator-logo.png"; */
import logo from "../assets/money-bag-6384.png";

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
