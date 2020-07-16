import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { login } from "../../actions/auth";
import axios from "axios";

const Login = ({ login }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    login({ email, password });

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

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

login.propTypes = {
  login: propTypes.func.isRequired,
  isAuthenticated: propTypes.bool,
};

// export default connect(null, { login })(Login);

export default connect(mapStateToProps, { login })(Login);

// import axios from "axios";

// try {
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };
//   const body = JSON.stringify({ email, password });

//   const res = await axios.post("/api/auth", body, config);
//   console.log(res.data);
// } catch (err) {
//   console.error(err.response.data);
// }

//   try {
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     const body = JSON.stringify({ email, password });

//     const res = await axios.post("/api/auth", body, config);
//     console.log(res.data);
//   } catch (err) {
//     console.error(err.response.data);
//   }
// }

// export const login = ({ email, password }) => async (dispatch) => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   const body = JSON.stringify({ email, password });

//   try {
//     const res = await axios.post("/api/auth", body, config);
//     dispatch({
//       type: LOGIN_SUCCESS,
//       payload: res.data,
//     });

//     dispatch(loadUser());
//   } catch (err) {
//     const errors = err.response.data.errors;

//     if (errors) {
//       errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
//     }
//     dispatch({
//       type: LOGIN_FAIL,
//     });
//   }
// };
