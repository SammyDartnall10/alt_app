import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
// import { connect } from "react-redux";
// import propTypes from "prop-types";
// import { login } from "../../actions/auth";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => console.log(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log("Submit form");
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Sign into your account
      </p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            name="password"
            onChange={(e) => onChange(e)}
            required
            minLength="6"
          />
        </div>

        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Dont have an account? <Link to="/register"> Sign Up</Link>
      </p>
    </Fragment>
  );
};

export default Login;
