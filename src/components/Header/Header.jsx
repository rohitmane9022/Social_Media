import "./Header.css";
import React from "react";

import { useNavigate } from "react-router-dom";
import twitter from "../../image+icon/twitter.svg"

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">

      <img src={twitter} alt={twitter} width="30px" onClick={() => navigate("/")} className="header-logo"/>
    </div>
  );
};
