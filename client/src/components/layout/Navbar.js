import React from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

const Navbar = () => {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
      <Nav.Item>
        <Nav.Link className="nav_links" href="/home">
          Logo
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="nav_links" eventKey="link-1">
          Search
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="nav_links" eventKey="link-2">
          Profile
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navbar;
