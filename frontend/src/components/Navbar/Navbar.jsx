import React, { useContext } from "react";
import "./Navbar.css";
import RoundedButton from "../Button/RoundedButton.jsx";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.jsx";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <nav>
      <h1 className="txt">Cubiod</h1>
      {user && <span className="name">Logged in as {user?.lastname}</span>}

      <div>
        {user ? (
          <div className="header">
            <button onClick={handleLogout} className="btn101">
              Logout
            </button>
          </div>
        ) : (
          <div className="header">
            <RoundedButton content="Login" link="/login" />
            <RoundedButton content="Register" link="/register" />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
