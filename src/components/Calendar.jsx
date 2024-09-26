import React from "react";
import map from "./map";
const img = ["0001", "0002", "0003", "0004", "0005"];
const Calendar = () => {
  return (
    <>
      {/* <p className="text-center my-6 text-xl md:text-4xl text-[#1b5912]">
        Hang tight! This feature is coming soon
      </p> */}

      <div className="h-[80vh] w-[50vw] custom-scrollbar my-6 rounded-xl mx-auto overflow-scroll ">
        {img.map((img, i) => (
          <div key={img} className="overflow-hidden ">
            <img
              src={`./docs/InductionProgam2024/InductionProgam2024_page-${img}.jpg`}
              alt=""
              className="w-[50vw]  "
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default Calendar;
