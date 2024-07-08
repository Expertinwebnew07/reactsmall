import React, { useState } from "react";
import Input from "./input.js";
import Toptext from "./toptext.js";
import Bottomtext from "./bottompart.js";
export default function Login() {
  const [details, setDetails] = useState({ email: "", password: "" });
  const [todos, setTodos] = useState([]);

  const handelChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(name, value);
  };

  const storedata = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => [...prevTodos, details]);
    console.log(todos);
  };

  return (
    <>
      <div className="registerlogin border border-danger    p-4 d-flex flex-column align-items-center justify-content-center">
        <Toptext Signlogin={"Login"} />
        <Input
          name="email"
          labletext="Email Address"
          type="email"
          value={details.email}
          onChange={handelChange}
        />
        <Input
          name="password"
          labletext="Password"
          type="password"
          value={details.password}
          onChange={handelChange}
          password="Forgot Password"
        />
        <Bottomtext Signlogin={"Login"} click={storedata} />
        <table>
          <thead>
             <th>Email</th>
            <th>Password</th>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                 <td>{todo.email}</td>
                <td>{todo.password}</td>
              </tr>
            ))}
          </tbody>
        </table>        
      </div>
    </>
  );
}
