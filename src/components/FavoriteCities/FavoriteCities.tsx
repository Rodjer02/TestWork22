"use client";
import { useWeatherStore } from "../../store/weatherStore";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import styles from "./styles/favorite.cities.style.module.scss";

const FavoriteCities = () => {
  const { favoriteCities } = useWeatherStore();

  return (
    <div className={styles.wrap}>
      <h2 style={{ marginBottom: "20px" }}>Избранные города</h2>
      <div className={styles.cities}>
        {favoriteCities.map((city) => (
          <div key={city.name} className={styles.box}>
            <div className={styles.box_header}>
              <h2>{city.name}</h2>
              <FavoriteButton cityName={city.name} weather={city.weather} />
            </div>

            {city.weather && (
              <div>
                <WeatherIcon icon={city.weather.icon} />
                <p>Temperature: {city.weather.temp}°C</p>
                <p>Weather: {city.weather.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteCities;
