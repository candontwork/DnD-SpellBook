import React from "react";
import Nav from "react-bootstrap/Nav";

function NavBar() {
  return (
    <>
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/SpellBook" eventKey="link-1">
            SpellBook
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
export default NavBar;
