import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const nav = useNavigate();
  const handleLouOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    nav("/login");
  };
  return (
    <div>
      <button className="material-symbols-outlined" onClick={handleLouOut}>
        logout
      </button>
    </div>
  );
};

export default Logout;
