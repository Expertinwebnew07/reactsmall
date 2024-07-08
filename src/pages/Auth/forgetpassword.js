import React, { useState } from "react";
import Input from "./input.js";
import Toptext from "./toptext.js";
import Bottomtext from "./bottompart.js";

export default function ForgetPassword() {
  const [details, setDetails] = useState({ email: "" });
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setDetails({ ...details, [e.target.name]: e.target.value });
    let a = (e.target.name, e.target.value);
    console.log(a);
  };

  const storeData = (e) => {
    e.preventDefault();
    setTodos([...todos, details]);
    console.log(todos);
  };

  return (
    <>
      <div className="registerlogin border border-danger p-4 d-flex flex-column s-center justify-content-center">
        <Toptext Signlogin={"Password Change"} />
        <Input
          name="email"
          labletext="Email Address"
          type="email"
          onChange={handleChange}
        />
        <Bottomtext Signlogin={"Forgot Password"} click={storeData} />
        <table>
          <thead>
            <th>Email</th>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <td>{todo.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
