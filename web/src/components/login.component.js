import React, { Component, useState } from "react";

function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <form onSubmit={submitHandler}>
      <h2>Нэвтрэх хэсэг</h2>

      <div className="form-group">
        <label>Username:</label>
        <input
          type={"text"}
          className="form-control"
          placeholder="admin"
          name="username"
          value={username}
          onChange={changeHandler}
        ></input>
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type={"password"}
          className="form-control"
          placeholder="test123"
          name="password"
          value={password}
          onChange={changeHandler}
        ></input>
      </div>

      <div className="text-center">
        <button className="btn btn-primary btn-block my-3">Login</button>
      </div>
    </form>
  );
}

export default Login;
