import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
import Whats from "../whats.jsx";
import Docs from "../docs.jsx";
import Syllabus from "../syllabus/syllabus.jsx";

const services = [
  {
    serviceLink: "Docs",
    iconClass: "material-symbols-outlined ",
    iconName: "file_copy",
    serviceName: "Documents",
  },
  {
    serviceLink: "WhatsGrp",
    iconClass: "fa fa-whatsapp text-white",
    iconName: "",
    serviceName: "WhatsApp Groups",
  },
  {
    serviceLink: "Syllabus",
    iconClass: "material-symbols-outlined ",
    iconName: "menu_book",
    serviceName: "Syllabus",
  },
  {
    serviceLink: "Calendar",
    iconClass: "material-symbols-outlined ",
    iconName: "calendar_month",
    serviceName: "Calendar",
  },
  // {
  //   iconClass: "",
  //   iconName: "",
  //   serviceName: "",
  // },
];

const Home = () => {
  return (
    <>
      <div className="homePage">
        <img src="./images/homeBg2.jpg" alt="" />
        <h1>Welcome to CampusDocs</h1>
        <h3>Your one-stop platform for Campus Resources and More</h3>
      </div>

      <section className="flex flex-row justify-between flex-wrap w-[95vw] md:w-[80vw] bg-gray-800 m-auto rounded-xl my-[3vh] p-6 md:p-8">
        {services.map((service, index) => (
          <NavLink
            to={`/campusDocs/${service.serviceLink}`}
            key={index}
            className="text-white bg-gray-700 p-5 w-[35vw] flex flex-col  md:justify-evenly items-center gap-3 rounded-2xl md:gap-5 my-2 cursor-pointer"
          >
            <span className={service.iconClass} style={{ fontSize: "32px" }}>
              {service.iconName}
            </span>
            <div className="text-white text-xl md:text-3xl text-center">
              {service.serviceName}
            </div>
          </NavLink>
        ))}
      </section>

      <Whats />
      <NavLink   to={`/campusDocs/Syllabus`}>
        <div className="max-h-[80vh] overflow-y-scroll">
          <Syllabus />
        </div>
      </NavLink>
      <Docs />
    </>
  );
};

export default Home;
