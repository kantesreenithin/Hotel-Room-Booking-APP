import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
function Navbar() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "/login";
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <Link to="/" className="navbar-brand fs-4">
            RoomQuick
          </Link>

          <div className="collapse navbar-collapse side" id="navbarNav">
            <ul className="navbar-nav mr-5">
              {user ? (
                <>
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="fa fa-user"></i> {user.data.name}
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="/profile">
                          Profile
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#" onClick={logout}>
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="btn btn-outline-dark">
                      <i className="fa fa-sign-in me-1"></i>Login
                    </Link>
                  </li>
                  <li className="navbar-nav">
                    <Link to="/register" className="btn btn-outline-dark ms-2">
                      <i className="fa fa-user-plus me-1"></i>Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

// <div className="buttons" style={{ marginLeft: "850px" }}>
//               <Link to="/login" className="btn btn-outline-dark">
//                 <i className="fa fa-sign-in me-1"></i>Login
//               </Link>
//               <Link to="/register" className="btn btn-outline-dark ms-2">
//                 <i className="fa fa-user-plus me-1"></i>Register
//               </Link>
//             </div>
