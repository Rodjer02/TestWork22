"use client";

import WeatherForecastWrapper from "@/components/ForecastWeather/ForecastWeather";
import { getForecastData } from "@/lib/api";
import { useWeatherStore } from "@/store/weatherStore";
import { ForecastData } from "@/types/weather";
import React, { useEffect, useState } from "react";

function page() {
  const { currentCity } = useWeatherStore();
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (currentCity) {
        const data = await getForecastData(currentCity);
        setForecastData(data);
      }
    };
    fetchWeatherData();
  }, [currentCity]);

  return (
    <>
      {forecastData && (
        <WeatherForecastWrapper
          city={currentCity}
          forecastData={forecastData}
        />
      )}
    </>
  );
}

export default page;
