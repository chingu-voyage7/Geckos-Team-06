import React, { Component } from "react";

import "./Register.css";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        login: "",
        password: "",
        name: "",
        email: "",
        birth: null,
        image: "",
        facebook: "",
        twitter: "",
        about: "",
        history: [],
        podcastSubscribe: []
      }
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    const {
      login,
      password,
      name,
      email,
      birth,
      image,
      facebook,
      twitter,
      about
    } = this.state;
    this.props.createUser({
      login,
      password,
      name,
      email,
      birth,
      image,
      facebook,
      twitter,
      about
    });
  };
  handleChange = event => {
    this.setState({[event.target.id]: event.target.value });
  };
  render() {
    return (
      <form className="form-wrapper" onSubmit={this.handleSubmit}>
        <h2>Register</h2>
        <div className="fields">
          <div className="required">
            <label htmlFor="login">
              Login
              <input
                type="text"
                name="login"
                id="login"
                placeholder="Login"
                onChange={this.handleChange}
                required
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
                required
              />
            </label>
            <label htmlFor="name">
              Name
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                onChange={this.handleChange}
                required
              />
            </label>
            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E-Mail"
                onChange={this.handleChange}
                required
              />
            </label>
            <label htmlFor="birth">
              Birth
              <input
                type="date"
                name="birth"
                id="birth"
                onChange={this.handleChange}
                required
              />
            </label>
          </div>
          <div className="optional">
            <label htmlFor="image">
              Image
              <input
                type="file"
                name="image"
                id="image"
                placeholder="Avatar Url"
                accept="image/png, image/jpeg"
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="facebook">
              Facebook
              <input
                type="text"
                name="facebook"
                id="facebook"
                placeholder="Facebook"
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="twitter">
              Twitter
              <input
                type="text"
                name="twitter"
                id="twitter"
                placeholder="Twitter"
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="about">
              About
              <input
                type="text"
                name="about"
                id="about"
                placeholder="About"
                onChange={this.handleChange}
              />
            </label>
          </div>
        </div>

        <button type="submit">Register</button>
      </form>
    );
  }
}

export default Register;
