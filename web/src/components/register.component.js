import axios from "axios";
import React, { Component } from "react";

export default class Register extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: this.username,
      email: this.email,
      password: this.password,
      password_confirm: this.confirmPassword,
    };
    axios
      .post("http://localhost:4000/register", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Register page</h2>

        <div className="form-group">
          <label>Username</label>
          <input
            type={"text"}
            className="form-control"
            placeholder="Username"
            onChange={(e) => (this.username = e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type={"email"}
            className="form-control"
            placeholder="Email"
            onChange={(e) => (this.email = e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type={"password"}
            className="form-control"
            placeholder="Password"
            onChange={(e) => (this.password = e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type={"password"}
            className="form-control"
            placeholder="Password again"
            onChange={(e) => (this.confirmPassword = e.target.value)}
          ></input>
        </div>

        <div className="text-center">
          <button className="btn btn-primary btn-block my-3">Sign up</button>
        </div>
      </form>
    );
  }
}
