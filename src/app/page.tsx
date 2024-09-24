"use client";

import { useEffect, useState } from "react";
import CityWeather from "../components/CityWeather/CityWeather";
import { getWeatherData } from "../lib/api";
import { useWeatherStore } from "../store/weatherStore";

const HomePage = () => {
  const { currentCity } = useWeatherStore();
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (currentCity) {
        const data = await getWeatherData(currentCity);
        setWeatherData(data);
      }
    };
    fetchWeatherData();
  }, [currentCity]);

  return (
    <div>
      {weatherData ? (
        <CityWeather city={currentCity} weather={weatherData} />
      ) : (
        <p>Loading weather data for {currentCity}...</p>
      )}
    </div>
  );
};

export default HomePage;
