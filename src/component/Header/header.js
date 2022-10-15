import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
import { FaSignInAlt, FaSignOutAlt, FaUser, FaHome } from "react-icons/fa";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const onlogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div className="head-Box">
      <p>
        <Link style={{ textDecoration: "none", color: "blue" }} to="/dashboard">
          <FaHome /> Starkbank
        </Link>
      </p>
      {user ? (
        <li style={{ display: "block" }}>
          <button onClick={onlogout}>
            <FaSignOutAlt /> logout
          </button>
        </li>
      ) : (
        <>
          <li style={{ display: "block" }}>
            <Link to="/login">
              <FaSignInAlt /> Login
            </Link>
          </li>
          <li>
            <Link style={{ display: "inline-block" }} to="/register">
              Register
              <FaUser />
            </Link>
          </li>
        </>
      )}
    </div>
  );
};

export default Header;
