import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { useAuth } from "../../contexts/AuthProvider";
import twitter from "../../image+icon/twitter.svg"

import { CreatePostForm } from "../CreatePostForm/CreatePostForm";
import {
  RiHomeWifiLine,
  BiSearch,
  HiOutlineBookmark,
  CgProfile,
  IoMdLogOut,
  FaFeather,
} from "../../utils/icons";

export const Navbar = () => {
  const [isCreateNewPostClicked, setIsCreateNewPostClicked] = useState(false);

  const { auth, handleLogout } = useAuth();
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "rgb(29, 155, 240)" : "white",
  });
  return (
    <nav className="navbar" >
      <div style={{marginTop:"20px"}}>
      <ul>
        
        <li>
          <NavLink className="navlink" style={getActiveStyle} to="/">
            {<RiHomeWifiLine className="navlink-icon" />}
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" style={getActiveStyle} to="/explore">
            <BiSearch className="navlink-icon" />
            <p>Explore</p>
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" style={getActiveStyle} to="/bookmark">
            <HiOutlineBookmark className="navlink-icon" />
            <p>Bookmark</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navlink"
            style={getActiveStyle}
            to={`/profile/${auth.username}`}
          >
            <CgProfile className="navlink-icon" />
            <p>Profile</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={handleLogout}
            className="navlink"
            style={getActiveStyle}
            to="/login"
          >
            <IoMdLogOut className="navlink-icon" />
            <p>Logout</p>
          </NavLink>
        </li>
      </ul>
      </div>
      <button
        className="create-new-post-btn"
        onClick={() => setIsCreateNewPostClicked(!isCreateNewPostClicked)}
      >
        
        <span style={{color:"white"}}>Tweet</span>
      </button>
      {isCreateNewPostClicked && (
        <div className="create-post-modal">
          <CreatePostForm
            className="modal-content"
            setIsCreateNewPostClicked={setIsCreateNewPostClicked}
          />
        </div>
      )}
    </nav>
  );
};
