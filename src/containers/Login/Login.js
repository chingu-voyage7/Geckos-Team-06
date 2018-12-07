import React, { Component } from "react";

import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        login: "",
        password: ""
      }
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    const { login, password } = this.state;
    this.props.createLogin({ login, password });
  };
  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };
  render() {
    return (
      <form className="form-wrapper" onSubmit={this.handleSubmit}>
        <img
          className="logo"
          src="https://picsum.photos/130/50"
          alt=""
          srcset=""
        />
        <label htmlFor="login">
          Login
          <input
            type="text"
            name="login"
            id="login"
            placeholder="Login"
            onChange={this.handleChange}
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default Login;
