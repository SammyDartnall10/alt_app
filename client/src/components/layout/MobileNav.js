import React, { Fragment } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { logout } from "../../actions/auth";
import Nav from "react-bootstrap/Nav";

const MobileNav = ({ auth: { isAuthenticated, loading }, logout }) => {
  const guestLinks = (
    <Nav className="nav_mobile">
      <Nav.Item>
        <Nav.Link href="/login">
          <i className="fas fa-plus-square f-icon" />
          {/* <span>Add Location</span> */}
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );

  const authLinks = (
    <Nav className="nav_mobile">
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

  return (
    <div>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </div>
  );
};

MobileNav.propTypes = {
  logout: propTypes.func.isRequired,
  auth: propTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(MobileNav);

// {/* // activeKey="/home"
//       // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}> */}
//       <Nav.Item>
//         <Nav.Link href="/add">
//           <i className="fas fa-plus-square f-icon" />
//           {/* <span>Add Location</span> */}
//         </Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link href="/map">
//           <i className="fas fa-map-marker-alt f-icon" />
//           {/* <span>Explore</span> */}
//         </Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link href="/search">
//           <i className="fas fa-search f-icon" />
//           {/* <span>Search</span> */}
//         </Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link href="/profile">
//           <i className="fas fa-user f-icon" />
//           {/* <span>Profile</span> */}
//         </Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link href="/favourites">
//           <i className="fas fa-heart f-icon" />
//           {/* <span>Favourites</span> */}
//         </Nav.Link>
//       </Nav.Item>
