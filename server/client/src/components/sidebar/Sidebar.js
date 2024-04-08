import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiHome2Fill } from "react-icons/ri";
import menu from "../../data/sidebar";
import SidebarItem from "./SidebarItem";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../services/authService";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [user,setUser] = useState(null);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();
  useEffect(() => {
    async function userDetails(){
      const user = await getUser();
      // console.log(user);
      setUser(user);
    }
    userDetails();
  },[])
  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="layout">
      <div className="sidebar" style={{ width: isOpen ? "230px" : "60px" }}>
        <div className="top_section">
          <div className="logo" style={{ display: isOpen ? "block" : "none" }}>
            <RiHome2Fill
              size={35}
              style={{ cursor: "pointer" }}
              onClick={goHome}
            />
          </div>

          <div
            className="bars"
            style={{ marginLeft: isOpen ? "100px" : "0px" }}
          >
            <HiMenuAlt3 onClick={toggle} />
          </div>
        </div>
        {menu.map((item, index) => {
          return item.role.includes(user?.role) && <SidebarItem key={index} item={item} isOpen={isOpen} />;
        })}
      </div>

      <main
        style={{
          paddingLeft: isOpen ? "230px" : "60px",
          transition: "all .5s",
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
