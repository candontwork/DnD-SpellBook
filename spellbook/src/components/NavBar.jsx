import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
  <div>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/SpellBook">SpellBook</Link>
    </li>
    <li>
      <Link to="/Dice Data">Dice Data</Link>
    </li>
  </div>
  );
}
export default Navbar;