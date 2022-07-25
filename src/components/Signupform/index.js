import React from "react";
import { Component } from "react";
import "./index.css";

class Signupform extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
    successMessage: ""
  };

  validatefirstname = (event) => {
    this.setState({ firstname: event.target.value });
  };

  validatelaststname = (event) => {
    this.setState({ lastname: event.target.value });
  };

  validateemail = (event) => {
    this.setState({ email: event.target.value });
  };

  validateusername = (event) => {
    this.setState({ username: event.target.value });
  };

  validatepassword = (event) => {
    this.setState({ password: event.target.value });
  };

  validatepassword = (event) => {
    this.setState({ confirmpassword: event.target.value });
  };

  submitform = (event) => {
    event.preventdefault();
    localStorage.setItem("UserName", username);
    localStorage.setItem("password", password);
    this.setState({ successMessage: "Registered Succesfully" });
    this.setState({
      firstname: "",
      lastname: "",
      email: "",
      username: "",
      password: "",
      confirmpassword: ""
    });
  };

  render() {
    const {
      firstname,
      lastname,
      email,
      username,
      password,
      confirmpassword,
      successMessage
    } = this.state;

    return (
      <div className="bg-container">
        <h1 className="heading">Signup</h1>
        <form className="form-container" onSubmit={this.submitform}>
          <div className="email-container">
            <label htmlfor="firstname" className="labelelement">
              Firstname
            </label>
            <input
              type="text"
              onChange={this.validatefirstname}
              className="inputelement"
            />
          </div>
          <div className="email-container">
            <label htmlfor="lastname" className="labelelement">
              Lastname
            </label>
            <input
              type="text"
              onChange={this.validatelaststname}
              className="inputelement"
            />
          </div>
          <div className="email-container">
            <label htmlfor="email" className="labelelement">
              Email
            </label>
            <input
              type="text"
              onChange={this.validateemail}
              className="inputelement"
            />
          </div>
          <div className="email-container">
            <label htmlfor="username" className="labelelement">
              Username
            </label>
            <input
              type="text"
              onChange={this.validateusername}
              className="inputelement"
            />
          </div>
          <div className="email-container">
            <label htmlfor="password" className="labelelement">
              Password
            </label>
            <input
              type="password"
              onChange={this.validatepassword}
              className="inputelement"
            />
          </div>
          <div className="email-container">
            <label htmlfor="username" className="labelelement">
              ConfirmPassword
            </label>
            <input
              type="password"
              onChange={this.validateconfirmpassword}
              className="inputelement"
            />
          </div>
          <button type="submit" className="submit">
            Register
          </button>
        </form>
        <p>{successMessage}</p>
      </div>
    );
  }
}

export default Signupform;
