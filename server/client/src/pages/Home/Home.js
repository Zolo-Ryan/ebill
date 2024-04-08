import React from "react";

import { Link } from "react-router-dom";
import "./Home.css";
import heroImg1 from "../../assets/Scripting img1.jpg";
import heroImg2 from "../../assets/Scripting img2.jpg";
import Logo from "../../assets/Logo.png"
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/HiddenLink";

const Home = () => {
  return (
    <div className="home">
      <nav className="container --flex-between ">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="title">
          <h1>E-bill Management System</h1>
        </div>

        <ul className="home-links">
          <ShowOnLogout>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ShowOnLogout>
          <ShowOnLogout>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/login">Login</Link>
              </button>
            </li>
          </ShowOnLogout>
          <ShowOnLogin>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/dashboard">Dashboard</Link>
              </button>
            </li>
          </ShowOnLogin>
        </ul>
      </nav>
     
      {/* HERO SECTION */}
      <section className="container hero">
        <div className="hero-text">
          <h2>"Simplify Your Shop's Billing Process"</h2>
          <p>
          Effortlessly manage your shop's billing processes with our intuitive eBill Management System. Streamline transactions, track inventory, and enhance customer satisfaction with ease.
          </p>
          <div className="hero-buttons">
            <button className="--btn --btn-secondary">
              <Link to="/dashboard">Free Trial 1 Month</Link>
            </button>
          </div>
          <div className="--flex-start">
            <NumberText num="14K" text="Brand Owners" />
            <NumberText num="23K" text="Active Users" />
            <NumberText num="500+" text="Partners" />
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImg1} alt="Inventory" className="image img1" />
          <img src={heroImg2} alt="Inventory" className="image img2"/>
        </div>
      </section>
    </div>
  );
};

const NumberText = ({ num, text }) => {
  return (
    <div className="--mr">
      <h3 className="--color-white">{num}</h3>
      <p className="--color-white">{text}</p>
    </div>
  );
};

export default Home;
