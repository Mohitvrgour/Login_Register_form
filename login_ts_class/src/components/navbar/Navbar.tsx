import React, { Component } from "react";
import "./navbar.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

interface NavbarProps {}

interface NavbarState {
  active: boolean;
}

class Navbar extends Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps) {
    super(props);
    this.state = {
      active: false
    };
  }

  // Function to toggle Navbar
  toggleNav = () => {
    this.setState((prevState) => ({ active: !prevState.active }));
  };

  render() {
    const { active } = this.state;

    return (
      <section className={`navBarSection ${active ? "activeNavbar" : ""}`}>
        <header className="header flex">
          <div className="logoDiv">
            <a href="#" className="logo flex">
              <h1 className="icon">Kalpavriksha</h1>
            </a>
          </div>
          <div className={`navBar ${active ? "activeNavbar" : ""}`}>
            <ul className="navLists flex">
              <li className="navItem">
                <a href="#" className="navLink">
                  Home
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  Courses
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  Coding
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  Certification
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  Pricing
                </a>
              </li>

              <button className="btn1">
                <a href="#" style={{color:"black"}}>Log-In</a>
              </button>
            </ul>
            <div onClick={this.toggleNav} className="closeNavbar">
              <AiFillCloseCircle className="icon" />
            </div>
          </div>
          <div onClick={this.toggleNav} className="toggleNavbar">
            <TbGridDots className="icon" />
          </div>
        </header>
      </section>
    );
  }
}

export default Navbar;
