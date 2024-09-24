import { useWeatherStore } from "../../store/weatherStore";
import { getForecastData } from "../../lib/api";
import { ForecastData, ForecastItem } from "../../types/weather";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import styles from "./styles/forecast.weather.style.module.scss";

const WeatherForecast = ({
  city,
  forecastData,
}: {
  city: string;
  forecastData: ForecastData;
}) => {
  // const forecastData: ForecastData = await getForecastData(city);
  const groupedForecast: { [key: string]: ForecastItem[] } = {};

  forecastData.list.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];
    if (!groupedForecast[date]) {
      groupedForecast[date] = [];
    }
    groupedForecast[date].push(item);
  });

  return (
    <div style={{ padding: "80px" }}>
      <h2>Weather forecast for {city}</h2>
      {Object.entries(groupedForecast).map(([date, items]) => (
        <div key={date} className={styles.list_forecast}>
          <h3>Weather for the {date}</h3>
          <div className={styles.list_day}>
            {items.map((item) => (
              <div key={item.dt} className={styles.item}>
                <p>{item.dt_txt.split(" ")[1]}</p>
                <WeatherIcon icon={item.weather[0].icon} />
                <p>Weather: {item.weather[0].description}</p>
                <p>Temperature: {item.main.temp}°C</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherForecast;
