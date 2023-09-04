import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Home() {
  const data = useContext(AuthContext);
  console.log(data);
  return (
    <section>
      <h1 style={{ textAlign: "center" }}>Welcome {data}</h1>
    </section>
  );
}

export default Home;
