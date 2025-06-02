import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>Home</div>
      <Link to={"/test/profile"}>Profile</Link>
    </>
  );
};

export default Home;
