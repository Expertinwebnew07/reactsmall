import React, { useState } from "react";
import Input from "./input.js";
import Toptext from "./toptext.js";
import Bottomtext from "./bottompart.js";

export default function SignIn() {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const [todos, setTodos] = useState([]);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const storedata = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => [...prevTodos, details]);
    console.log(todos);
  };

  return (
    <>
      <div className="registerlogin col-12 p-4 d-flex flex-column align-items-center justify-content-center">
        <Toptext Signlogin="Signin" />
  
        <Input
          name="name"
          labletext="Full Name"
          type="text"
          onChange={handelChange}
        />
        <Input
          name="email"
          labletext="Email Address"
          type="email"
          onChange={handelChange}
        />
        <Input
          name="password"
          labletext="Password"
          type="password"
          onChange={handelChange}
        />
        <Bottomtext Signlogin="Signin" click={storedata} />
        <table>
          <thead>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <td>Name: {todo.name}</td>
                <td>Email: {todo.email}</td>
                <td>Password: {todo.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
