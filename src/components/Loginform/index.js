import { Component } from "react";
import "./index.css";

class Loginform extends Component {
  state = {
    userName: "",
    passWord: "",
    loginMessage: ""
  };

  username = (event) => {
    this.setState({ userName: event.target.value });
  };

  password = (event) => {
    this.setState({ passWord: event.target.value });
  };

  submitform = (event) => {
    event.preventdefault();
    console.log(userName, passWord);
  };

  render() {
    const { loginMessage } = this.state;
    return (
      <div className="bg-container">
        <h1 className="heading">Login</h1>
        <form className="form-container" onSubmit={this.submitform}>
          <div className="email-container">
            <label htmlfor="username" className="labelelement">
              Username
            </label>
            <input
              type="text"
              onChange={this.username}
              className="inputelement"
            />
          </div>
          <div className="email-container">
            <label htmlfor="password" className="labelelement">
              Password
            </label>
            <input
              type="password"
              onChange={this.password}
              className="inputelement"
            />
          </div>
          <button type="submit" className="submit">
            Login
          </button>
        </form>
        <p>{loginMessage}</p>
      </div>
    );
  }
}

export default Loginform;
