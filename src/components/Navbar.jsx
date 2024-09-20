import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navs = [
  { navLink: "Home", navText: "Home" },
  { navLink: "Docs", navText: "Docs" },
  { navLink: "WhatsGrp", navText: "WhatsGrp" },
  { navLink: "Syllabus", navText: "Syllabus" },
  { navLink: "Calendar", navText: "Calendar" },
];

const Navbar = () => {
  const [drop, setDrop] = useState(0);
  const dropMenu = () => {
    drop == 1 ? setDrop(0) : setDrop(1);
    console.log(drop);
  };

  return (
    <>
      <nav>
        <section className="nav1">
          <div className="navName">
            <NavLink to="/">
              <img src="./images/gec_kishangan_logo.png" alt="" />
            </NavLink>
            <p>Government Engineering College, Kishanganj</p>
          </div>

          <p className="tittle">
            <span>&lt;</span>One<span>Stop.</span>&gt;
          </p>
        </section>
        <section
          className="nav2 navMenu flex justify-center items-center text-white text-xl font-extrabold md:hidden cursor-pointer pb-5"
          onClick={() => {
            dropMenu();
          }}
        >
          <span className="text-white">Resources</span>
          <i className="material-icons text-white text-2xl font-extrabold pl-3">{
            drop ? "expand_less" : "expand_more"}</i>
        </section>
        <section
          className={`nav2 flex md:flex flex-col md:flex-row md:gap-5 justify-center items-center md:justify-end md:px-[4vw] uppercase font-extrabold text-xl transition-all duration-500 ease-in-out overflow-hidden md:overflow-visible md:opacity-100 md:min-h-[30px] ${
            drop ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"
          }`}
        >
          {Navs.map((nav, index) => (
            <NavLink
              key={index}
              onClick={() => {
                dropMenu();
              }}
              to={`/campusDocs/${nav.navLink}`}
              className={(e) =>
                `${
                  e.isActive ? "text-white" : "text-[#85888a]"
                } p-4 cursor-pointer hover:scale-125 w-full md:w-fit text-center`
              }
            >
              {nav.navText}
            </NavLink>
          ))}
        </section>
      </nav>
    </>
  );
};

export default Navbar;
