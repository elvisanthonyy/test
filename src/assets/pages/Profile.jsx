import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <div>Profile</div>
      <Link to={"/test/"}>Home</Link>
    </>
  );
};

export default Profile;
