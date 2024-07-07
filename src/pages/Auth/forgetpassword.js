import React, { useState } from "react";
import Input from "./input.js";
import Toptext from "./toptext.js";
import Bottomtext from "./bottompart.js";

export default function ForgetPassword() {
  const [details, setDetails] = useState({ email: "" });
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(name, value);
  };

  const storeData = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => [...prevTodos, details]);
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
      </div>
    </>
  );
}
