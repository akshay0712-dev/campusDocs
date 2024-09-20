import React from "react";

const Footer = () => {
  return (
    <>
      {/* .........footer.......... */}

      <footer className="px-[4vw] md:px-[10vw] mx-auto">
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
              <i className="fa fa-instagram text-white text-xl md:text-2xl "></i>
            </a>
            <a
              className="hover:scale-125"
              href="https://www.linkedin.com/in/akshay-kumar-93b487215/"
            >
              <i className="fa fa-linkedin text-white text-xl md:text-2xl "></i>
            </a>
            <a
              className="hover:scale-125"
              href="https://github.com/akshay0712-dev/campusDocs"
            >
              <i className="fa fa-github text-white text-xl md:text-2xl "></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
