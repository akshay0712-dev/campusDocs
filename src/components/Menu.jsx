import React, { useState } from "react";

const today = new Date();
const dayOfWeek = today.getDay();

const messMenu = [
  {
    ind: 0,
    day: "Sunday",
    breakfast: "Puri, Chana Subji",
    lunch: "Dal, Rice , Aloo Bhujia, Aloo Chokha, Onion Pakora",
    dinner: "Chicken Curry/Matar Mushroom Subji, Rice, Chapati, Salade",
  },
  {
    ind: 1,
    day: "Monday",
    breakfast: "Puri(5), Aloo Matar Subji, Pickle",
    lunch: "Rice, Dal, Green Vegetables, Salad, Baingan Pakora (2)",
    dinner: "Chapati, Seviyaan, Aloo Simla Subji / Kofta",
  },
  {
    ind: 2,
    day: "Tuesday",
    breakfast: "Chapati(4) , Aloo Chana Subji ",
    lunch: "Palow, Tarka Dal, Aloo Bhujia, Papad, Salad ",
    dinner: "Khir, Puri, Aloo Matar Subji, Pickle ",
  },
  {
    ind: 3,
    day: "Wednesday",
    breakfast: "Idli, Sambar, Chutney",
    lunch: "Rice, Dal, Bhujia, Fish Curry/ Matar Paneer",
    dinner: "Chapati, Green Vegetable, Salad, Pickle",
  },
  {
    ind: 4,
    day: "Thursday",
    breakfast: "Mung Dal Kachaury, Sarsho Chutney, Mitha Chutney",
    lunch: "Kadhi, Bari, Rice, Bhujia, Papad, Salad",
    dinner: "Chapati, Green Vegetable, Bhujia, White Sponge Sweet",
  },
  {
    ind: 5,
    day: "Friday",
    breakfast: "Chole Bhature, Onion, Pickle",
    lunch: "Rice, Dal, Soyabin Subji, Aloo Chop(2) Salad",
    dinner: "Rice, Chapati, Salad, Egg Curry/ Matar Paneer",
  },
  {
    ind: 6,
    day: "Saturday",
    breakfast: "Aloo Paratha, Tomato Chutney, OR Bread, Chai, Banana(2)/Egg(2)",
    lunch: "Dal, Rice , Aloo Bhindi Bhujia, Papad, Salade, Pickle",
    dinner: "Veg Biryani, Cucumber Raita",
  },
];

const Menu = () => {
  const [todayDay, setTodayDay] = useState(dayOfWeek);
  const [dayHeight, setDayHeight] = useState(0);
  // console.log(dayOfWeek);
  const changeDay = (dayToday) => {
    setTodayDay(dayToday);
  };

  const toggleDays = () => {
    dayHeight == 1 ? setDayHeight(0) : setDayHeight(1);
  };

  return (
    <>
      <div className="rounded-xl overflow-hidden w-fit mx-auto my-8">
        <div className="grid grid-cols-[25vw_70vw] md:grid-cols-[10vw_70vw]  mx-auto w-[95vw] md:w-[80vw]  ">
          <div className="bg-gray-800 pl-3 py-2 text-white">BreakFast</div>
          <div className="bg-gray-700 pl-3 py-2 text-white">
            {messMenu[todayDay].breakfast}
          </div>
        </div>
        <div className="grid grid-cols-[25vw_70vw] md:grid-cols-[10vw_70vw]  mx-auto w-[95vw] md:w-[80vw] ">
          <div className="bg-gray-800 pl-3 py-2 text-white">Lunch</div>
          <div className="bg-gray-700 pl-3 py-2 text-white">
            {messMenu[todayDay].lunch}
          </div>
        </div>
        <div className="grid grid-cols-[25vw_70vw] md:grid-cols-[10vw_70vw]  mx-auto w-[95vw] md:w-[80vw] ">
          <div className="bg-gray-800 pl-3 py-2 text-white">Dinner</div>
          <div className="bg-gray-700 pl-3 py-2 text-white">
            {messMenu[todayDay].dinner}
          </div>
        </div>
      </div>
      <div className="text-center mb-8 ">
        <span
          className="flex w-fit mx-auto bg-gray-800 text-white rounded-lg text-lg px-5 py-3 cursor-pointer "
          onClick={() => {
            toggleDays();
          }}
        >
         <span className=" text-white"> {messMenu[todayDay].day}</span>
          <i className="material-icons text-white text-2xl font-extrabold pl-3">{
            dayHeight == 1 ? "expand_less" : "expand_more"}</i>
        </span>
      </div>
      <div
        className={`${
          dayHeight == 1 ? "h-[100%] p-1" : "h-0 overflow-hidden"
        }  text-center mb-8 flex flex-col w-fit mx-auto bg-gray-800 relative top-[-20px] left-[10px]  rounded-lg gap-2 `}
      >
        {messMenu.map((menu, index) => {
          return (
            <>
              <span
                key={menu.ind + menu.day}
                className="px-5 py-3 bg-gray-700 rounded-lg  text-white cursor-pointer"
                onClick={() => {
                  changeDay(menu.ind); 
                  toggleDays();
                }}
              >
                {menu.day}{" "}
              </span>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
