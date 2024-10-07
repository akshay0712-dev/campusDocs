import React from 'react'

const today = new Date();
const dayOfWeek = today.toLocaleString('default', { weekday: 'long' });


const messMenu = [
  {
    day: "Monday",
    breakfast: "Puri, Aloo Matar Subji",
    lunch: "",
    dinner: ""
  },
  {
    day: "Tuesday",
    breakfast: "Chapati, Aloo Chana Subji ",
    lunch: "",
    dinner: ""
  },
  {
    day: "Wednesday",
    breakfast: "",
    lunch: "Fish Curry/ Matar Paneer, Rice",
    dinner: ""
  },
  {
    day: "Thursday",
    breakfast: "",
    lunch: "",
    dinner: ""
  },
  {
    day: "Friday",
    breakfast: "Chole Bhature",
    lunch: "",
    dinner: "Egg Curry/ Matar Paneer, Rice, Chapati"
  },
  {
    day: "Saturday",
    breakfast: "Aloo Paratha, Tomato Chutney",
    lunch: "Dal, Rice , Aloo Bhindi Bhujia, Salade",
    dinner: "Veg Biryani, Cucumber Raita"
  },
  {
    day: "Sunday",
    breakfast: "Puri, Chana Subji",
    lunch: "Dal, Rice , Aloo Bhujia, Aloo Chokha, Onion Pakora",
    dinner: "Chicken Curry/Matar Mushroom Subji, Rice, Chapati, Salade"
  }
];




const Menu = () => {
  console.log(dayOfWeek);

  return (
    <>
    <h1>Menu</h1>
    <div className="">
      <div className="">
        <div className=""></div>
        <div className=""></div>
      </div>
      <div className=""></div>
    </div>
    </>
    
  )
}

export default Menu
