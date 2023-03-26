import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccount from "@material-ui/icons/SupervisorAccount";
import BusinessCenterOutlined from "@material-ui/icons/BusinessCenterOutlined";
import Notifications from "@material-ui/icons/Notifications";
import Chat from "@material-ui/icons/Chat";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="linkedin.png" alt="" />

        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenterOutlined} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption
          avatar="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
          title="Me"
        />
      </div>
    </div>
  );
}

export default Header;
