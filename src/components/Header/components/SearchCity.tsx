"use client";
import { useState } from "react";
import { useWeatherStore } from "../../../store/weatherStore";
import styles from "../styles/header.styles.module.scss";
const SearchCity = () => {
  const [cityName, setCityName] = useState("");
  const setCurrentCity = useWeatherStore((state) => state.setCurrentCity);

  return (
    <div>
      <input
        type="text"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        placeholder="Enter city name"
      />
      <button
        type="submit"
        onClick={() => {
          setCurrentCity(cityName);
          setCityName("");
          console.log(cityName);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchCity;
