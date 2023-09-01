import React, { useEffect, useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };

  const fetchData = async () => {
    const response = await fetch(`http://localhost:8080/register`, {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
    if (result) {
      navigate("/");
    }
  };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <input
          type="text"
          value={name}
          placeholder="Enter Your name...."
          onChange={(e) => setName(e.target.value)}
          className="form__field"
        />
        <input
          type="email"
          value={email}
          placeholder="Enter Your email...."
          onChange={(e) => setEmail(e.target.value)}
          className="form__field"
        />
        <input
          type="password"
          value={password}
          placeholder="Enter Your password...."
          onChange={(e) => setPassword(e.target.value)}
          className="form__field"
        />
        <button onClick={fetchData}>Submit</button>
      </form>
    </>
  );
}

export default Register;
