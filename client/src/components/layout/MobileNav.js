import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { logout } from "../../actions/auth";
import Nav from "react-bootstrap/Nav";

const MobileNav = ({ auth: { isAuthenticated, loading }, logout }) => {
  const guestLinks = (
    <ul>
      <li>
        <Link to="/login">
          <i className="fas fa-plus-square f-icon" />
        </Link>
      </li>
    </ul>
  );

  const authLinks = (
    <ul>
      <li>
        <Link to="/add">
          <i className="fas fa-plus-square f-icon" />
        </Link>
      </li>
      <li>
        <Link to="/map">
          <i className="fas fa-map-marker-alt f-icon" />
        </Link>
      </li>
      <li>
        <Link to="/search">
          <i className="fas fa-search f-icon" />
        </Link>
      </li>
      <li>
        <Link to="/profile">
          <i className="fas fa-user f-icon" />
        </Link>
      </li>
      <li>
        <Link to="/favourites">
          <i className="fas fa-heart f-icon" />
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="nav_mobile">
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
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

{
  /* <nav className="navbar bg-dark">
      <h4>
        <Link to="/">
          <i className="fas fa-heart"></i>
        </Link>
      </h4>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav> */
}

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

{
  /* <Nav className="nav_mobile">
      <Nav.Item>
        <Nav.Link href="/add">
          <i className="fas fa-plus-square f-icon" />
          {/* <span>Add Location</span> */
}
//     </Nav.Link>
//   </Nav.Item>
//   <Nav.Item>
//     <Nav.Link href="/map">
//       <i className="fas fa-map-marker-alt f-icon" />
//       {/* <span>Explore</span> */}
//     </Nav.Link>
//   </Nav.Item>
//   <Nav.Item>
//     <Nav.Link href="/search">
//       <i className="fas fa-search f-icon" />
//       {/* <span>Search</span> */}
//     </Nav.Link>
//   </Nav.Item>
//   <Nav.Item>
//     <Nav.Link href="/profile">
//       <i className="fas fa-user f-icon" />
//       {/* <span>Profile</span> */}
//     </Nav.Link>
//   </Nav.Item>
//   <Nav.Item>
//     <Nav.Link href="/favourites">
//       <i className="fas fa-heart f-icon" />
//       {/* <span>Favourites</span> */}
//     </Nav.Link>
//   </Nav.Item>
// </Nav> */}

// <Nav className="nav_mobile">
//   <Nav.Item>
//     <Nav.Link href="/login">
//       <i className="fas fa-plus-square f-icon" />
//       {/* <span>Add Location</span> */}
//     </Nav.Link>
//   </Nav.Item>
// </Nav>

// <ul>
//   <li>
//     <Link to="/add">
//       <i className="fas fa-plus-square f-icon" />
//     </Link>
//   </li>
//   <li>
//     <Link to="/map">
//       <i className="fas fa-map-marker-alt f-icon" />
//     </Link>
//   </li>
//   <li>
//     <Link to="/search"><i className="fas fa-search f-icon" /></Link>
//   </li>
//   <li>
//     <Link to="/profile"><i className="fas fa-user f-icon" /></Link>
//   </li>
//   <li>
//     <Link to="/favourites"><i className="fas fa-heart f-icon" /></Link>
//   </li>
// </ul>;
