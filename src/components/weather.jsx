import React, { useState, useEffect } from "react";

const latitude = 26.149185299720525;
const longitude = 87.93918141382275;
const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${latitude},${longitude}`;

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "bf455455c1msh8ccbf8fc5cd4b8fp143900jsnbe9cd1f8e4f9",
    "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
  },
};

const Weather = () => {
  const [tempC, setTempC] = useState(null);
  const [error, setError] = useState(null);
  const [text, setText] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json(); // Parse response as JSON
        if (result && result.current) {
          setTempC(result.current.temp_c); // Set the temperature in Celsius
          setText(result.current.condition.text); // Set the temperature text
          setImgUrl(result.current.condition.icon); // Set the image url
        } else {
          setError("Weather data is unavailable.");
        }
      } catch (error) {
        setError("Error fetching data.");
        console.error(error);
      }
    };

    fetchWeather(); // Call the function
  }, []); // Empty dependency array to run on component mount

  return (
    <div className="text-center text-3xl my-6">
      {error ? (
        <p>{error}</p>
      ) : tempC !== null ? (
        <>
          <p className="inline-block text-white z-10 text-xl  ">
            {tempC} °C {text}
            <img src={imgUrl} alt={text} className="inline-block " />
          </p>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Weather;
