import React from "react";
import { NavLink } from "react-router-dom";

const Navs = [
  { navLink: "Home", navText: "Home" },
  { navLink: "Docs", navText: "Docs" },
  { navLink: "WhatsGrp", navText: "WhatsGrp" },
  { navLink: "Syllabus", navText: "Syllabus" },
  { navLink: "Calendar", navText: "Calendar" },
];

const Footer = () => {
  return (
    <>
      {/* .........footer.......... */}

      <footer className="px-[4vw] md:px-[10vw] mx-auto">
        {/* .....footer Get in Touch....... */}
        <div className="flex md:grid md:grid-cols-2 flex-col justify-between py-4">
          <div className="border-b-2 md:border-b-0 border-[#bbb8b8] md:border-r-2 ">
            <p className="head1 text-3xl md:text-6xl">Get in touch!</p>
            <p className="head2 text-sm md:text-xl">akshayrishu4@gmail.com</p>
            <p className="tittle text-white text-[30px] text-center pt-9 font-extrabold tracking-widest">
            <span className="tracking-wide">&lt;</span>One<span className="tracking-wide">Stop.</span>&gt;
          </p>
          </div>

          {/* .......important Links */}
          <div className="">
            <div className="head1 text-3xl md:text-4xl">Important Links</div>

            <div className="flex flex-row justify-evenly">
              <div className="flex flex-col ">
                <NavLink
                  to="/campusDocs/Home"
                  className={(e) =>
                    `${
                      e.isActive ? "text-white" : "text-[#85888a]"
                    } uppercase p-4 cursor-pointer hover:scale-125 w-full md:w-fit text-center flex items-center`
                  }
                >
                  <i className="material-icons text-white pr-2">home</i>
                  Home
                </NavLink>
                <NavLink
                  to="/campusDocs/Docs"
                  className={(e) =>
                    `${
                      e.isActive ? "text-white" : "text-[#85888a]"
                    } uppercase p-4 cursor-pointer hover:scale-125 w-full md:w-fit text-center flex items-center`
                  }
                >
                  <span className="material-symbols-outlined pr-2">
                    file_copy
                  </span>
                  Docs
                </NavLink>
                <NavLink
                  to="/campusDocs/WhatsGrp"
                  className={(e) =>
                    `${
                      e.isActive ? "text-white" : "text-[#85888a]"
                    } uppercase p-4 cursor-pointer hover:scale-125 w-full md:w-fit text-center flex items-center`
                  }
                >
                  <i className="fa fa-whatsapp text-white pr-2 font-bold text-lg"></i>
                  WhatsGrp
                </NavLink>
              </div>

              <div className="flex flex-col ">
                <NavLink
                  to="/campusDocs/Syllabus"
                  className={(e) =>
                    `${
                      e.isActive ? "text-white" : "text-[#85888a]"
                    } uppercase p-4 cursor-pointer hover:scale-125 w-full md:w-fit text-center flex items-center`
                  }
                >
                  <span className="material-symbols-outlined pr-2">
                    menu_book
                  </span>
                  Syllabus
                </NavLink>
                <NavLink
                  to="/campusDocs/Calendar"
                  className={(e) =>
                    `${
                      e.isActive ? "text-white" : "text-[#85888a]"
                    } uppercase p-4 cursor-pointer hover:scale-125 w-full md:w-fit text-center flex items-center`
                  }
                >
                  <span className="material-symbols-outlined pr-2">
                    calendar_month
                  </span>
                  Calendar
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div className="flex flex-row items-center justify-between pt-4">
          <p className="text-[#bbb8b8] text-xs md:text-sm ">
            &copy; 2024 Your Company. All rights reserved.
          </p>

          <div className=" flex flex-row gap-5 ">
            <a
              className="hover:scale-125"
              href="https://www.instagram.com/akshay__rishu/"
            >
              <i className="fa fa-instagram"></i>

            </a>
            <a
              className="hover:scale-125"
              href="https://www.linkedin.com/in/akshay-kumar-93b487215/"
            >
              <i className="fa fa-linkedin text-white text-xl md:text-2xl hover:bg-linkedin  hover:rounded-full"></i>
            </a>
            <a
              className="hover:scale-125"
              href="https://github.com/akshay0712-dev/campusDocs"
            >
              <i className="fa fa-github text-white text-xl md:text-2xl hover:text-[#181717] h-fit px-1 hover:bg-white  hover:rounded-full"></i>
            </a>
          </div>
        </div>
        <hr className="mt-3" />
      </footer>
    </>
  );
};

export default Footer;
