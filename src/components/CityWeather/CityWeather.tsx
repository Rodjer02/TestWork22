import { WeatherData } from "@/types/weather";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import styles from "./styles/city.weather.styles.module.scss";
import Link from "next/link";

interface CityWeatherProps {
  city: string;
  weather: WeatherData;
}

const CityWeather = ({ city, weather }: CityWeatherProps) => {
  const backgroundImages: { [key: string]: string } = {
    Clear: "/images/clear.png",
    Clouds: "/images/clouds.jpg",
    Rain: "/images/rain.jpg",
    Drizzle: "",
    Thunderstorm: "/images/storm.jpg",
    Snow: "/images/snow.jpg",
    Mist: "/images/mist.jpg",
    Smoke: "",
    Haze: "",
    Dust: "",
    Fog: "",
    Sand: "/images/sand.jpg",
    Ash: "/images/ash.jpg",
    Squall: "/images/Squall.jpg",
    Tornado: "/images/tornado.jg",
  };

  const backgroundImage =
    backgroundImages[weather.weather[0].main] || "/images/default.jpg";

  if (!weather) return <p>Weather data not available for {city}</p>;
  return (
    <div
      className={styles.weather_wrap}
      style={
        weather
          ? {
              background: `url(${backgroundImage})`,
            }
          : {}
      }
    >
      {weather && (
        <div className={styles.weather_card}>
          <div className={styles.card_header}>
            <h2>{weather.name}</h2>
            <FavoriteButton cityName={weather.name} weather={weather} />
          </div>

          <WeatherIcon icon={weather.weather[0].icon} />
          <p>Weather: {weather.weather[0].description}</p>
          <ul>
            <li>Temperature: {weather.main.temp}°C</li>
            <li>Pressure: {weather.main.pressure} hPa</li>
            <li>Humidity: {weather.main.humidity}%</li>
            <li>Wind speed: {weather.wind.speed} m/s</li>
            <li>Wind direction: {weather.wind.deg}°</li>
            <li>Cloudiness: {weather.clouds.all}%</li>
          </ul>
          <div className={styles.card_link}>
            <Link href="/forecast">More</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CityWeather;
