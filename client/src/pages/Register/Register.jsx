import React, { useState } from "react";

function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <>
      <form className="form">
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
        <button>Submit</button>
      </form>
    </>
  );
}

export default Register;
