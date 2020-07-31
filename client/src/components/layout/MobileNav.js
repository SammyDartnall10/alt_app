import React from "react";
import PropTypes from "prop-types";
import Nav from "react-bootstrap/Nav";

const MobileNav = (props) => {
  return (
    <Nav className="nav_mobile">
      {/* // activeKey="/home"
      // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}> */}
      <Nav.Item>
        <Nav.Link href="/add">
          <i className="fas fa-plus-square f-icon" />
          {/* <span>Add Location</span> */}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/map">
          <i className="fas fa-map-marker-alt f-icon" />
          {/* <span>Explore</span> */}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/search">
          <i className="fas fa-search f-icon" />
          {/* <span>Search</span> */}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/profile">
          <i className="fas fa-user f-icon" />
          {/* <span>Profile</span> */}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/favourites">
          <i className="fas fa-heart f-icon" />
          {/* <span>Favourites</span> */}
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

MobileNav.propTypes = {};

export default MobileNav;
