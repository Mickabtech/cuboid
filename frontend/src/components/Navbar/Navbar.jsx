// import React, { useContext, useState } from "react";
// import "./Navbar.css";
// import RoundedButton from "../Button/RoundedButton.jsx";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext.jsx";
// import Notification from "../chat/Notification.jsx";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const { user, logoutUser } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleLogout = () => {
//     logoutUser();
//     navigate("/login");
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav>
//       <h1 className="txt">Cubiod</h1>


//       {user && <span className="name">Logged in as {user?.username}</span>}

//       <div>
//         {user ? (
//           <div className="header">
//             <Notification />
//             <button onClick={handleLogout} className="btn101">
//               Logout
//             </button>
//           </div>
//         ) : (
//           <div className="header">
//             <RoundedButton content="Login" link="/login" />
//             <RoundedButton content="Register" link="/register" />
//           </div>
//         )}
//       </div>
//     </nav>
//   );

// };

// export default Navbar;


import React, { useContext, useState } from "react";
import "./Navbar.css";
import RoundedButton from "../Button/RoundedButton.jsx";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.jsx";
import Notification from "../chat/Notification.jsx";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <h1 className="txt">Cubiod</h1>

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`menu-content ${menuOpen ? "show" : ""}`}>
        {user && <span className="name">Logged in as {user?.username}</span>}

        {user ? (
          <div className="header">
            <Notification />
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
