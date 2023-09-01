import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Home() {
  const data = useContext(AuthContext);
  console.log(data);
  return (
    <section>
      <h1>Welcome {data}</h1>
    </section>
  );
}

export default Home;
