import React, { useState } from "react";
import map from "./map";
const img = ["0001", "0002", "0003", "0004", "0005"];
const Calendar = () => {
  return (
    <>
      <div className="mx-auto w-[90vw] flex flex-col-reverse md:flex-row my-6 gap-3 rounded-t-xl">
        <div className="mx-auto w-[90vw] md:w-[50vw] bg-white rounded-t-xl">
          <div className="text-center text-2xl pt-3 my-3 border-b-2">
            Induction Programme Schedule
          </div>

          <div className={`custom-scrollbar rounded-xl  `}>
            {img.map((img, i) => (
              <div key={img} className=" ">
                <img
                  src={`./docs/InductionProgam2024/InductionProgam2024_page-${img}.jpg`}
                  alt=""
                  className="md:w-[50vw] w-[90vw]  rounded-b-xl"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-[90vw] md:w-[45vw] ">
          <div className="text-center text-2xl pt-3 border-b-2 bg-white rounded-t-xl">
            Computer Science Time Table
          </div>
          {/* <div className="bg-white text-center w-[45vw]  ">Computer Science Time Table</div> */}
          <img
            src="images/RoutineCS.jpg"
            alt="Routine_CS"
            className="rounded-b-xl mb-2"
          />
          <div className="text-center text-2xl pt-3 border-b-2 bg-white rounded-t-xl">
            Computer Science (AI & ML) Time Table
          </div>
          <img
            src="images/RoutineAI_ML.jpg"
            alt="Routine_CS"
            className="rounded-b-xl mb-3"
          />
          <div className="text-center text-2xl pt-3 border-b-2 bg-white rounded-t-xl">
            ECE Time Table
          </div>
          <img
            src="images/RoutineECE.jpg"
            alt="Routine_ECE"
            className="rounded-b-xl mb-3 "
          />
          <div className="text-center text-2xl pt-3 border-b-2 bg-white rounded-t-xl">
            Civil Time Table
          </div>
          <img
            src="images/CivilRoutin.jpg"
            alt="Routine_CS"
            className="rounded-b-xl mb-2"
          />
        </div>
      </div>
    </>
  );
};
export default Calendar;
