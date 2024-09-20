import React, { useState } from "react";
import "./syllabus.css";

const yearDrop = ["1st", "2nd", "3rd", "4th"];
const semesterDrop = ["1st", "2nd "];

const syllabus = () => {
  const [isYearDropBoxVisible, setYearDropBoxVisible] = useState(false);
  const [isSemesterDropBoxVisible, setSemesterDropBoxVisible] = useState(false);
  const [year, setYear] = useState("1st Year");
  const [semester, setSemester] = useState("1st Semester");

  const toggleYearDropBox = () => {
    setYearDropBoxVisible(!isYearDropBoxVisible);
    isSemesterDropBoxVisible
      ? setSemesterDropBoxVisible(!isSemesterDropBoxVisible)
      : "";
  };
  const toggleSemesterDropBox = () => {
    isYearDropBoxVisible ? setYearDropBoxVisible(!isYearDropBoxVisible) : "";
    setSemesterDropBoxVisible(!isSemesterDropBoxVisible);
  };
  const toggleYear = (y) => {
    setYear(y + " Year");
    toggleYearDropBox();
    
  }
  
  const toggleSemester = (s) => {
    setSemester(s + " Semester")
    toggleSemesterDropBox()

  }

  return (
    <>
      <section className="w-[90vw] flex justify-evenly mx-auto gap-6 my-6">
        <section className="w-[fit]">
          <section
            className="dropboxHead w-fit"
            onClick={() => {
              toggleYearDropBox();
            }}
          >
            <span className="text-white ">{year}</span>
          </section>

          <section
            className={`dropBox transition-all duration-300 ease-in-out overflow-hidden  ${
              isYearDropBoxVisible
                ? "opacity-100 max-h-[500px]"
                : "opacity-0 max-h-0"
            }`}
          >
            {yearDrop.map((year, index) => (
              <div
                key={index}
                className="dropOption text-white"
                onClick={() => {
                  toggleYear(year);
                }}
              >
                {year} Year
              </div>
            ))}
          </section>
        </section>

        {/* secomd Drop Box */}
        <section className="w-[fit]">
          <section
            className="dropboxHead w-fit"
            onClick={() => {
              toggleSemesterDropBox();
            }}
          >
            <span className="text-white ">{semester}</span>
          </section>

          <section
            className={`dropBox  ${
              isSemesterDropBoxVisible
                ? "opacity-100 max-h-[500px]"
                : "opacity-0 max-h-0"
            }`}
          >
            {semesterDrop.map((sem, index) => (
              <div key={index} className="dropOption text-white"
              onClick={() => {
                toggleSemester(sem);
              }}>
                {sem} Semester
              </div>
            ))}
          </section>
        </section>
      </section>
    </>
  );
};

export default syllabus;
