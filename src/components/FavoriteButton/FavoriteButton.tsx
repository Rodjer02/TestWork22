"use client";

import { City } from "@/types/weather";
import { useWeatherStore } from "../../store/weatherStore";
import { MdFavorite } from "react-icons/md";

interface FavoriteButtonProps {
  cityName: string;
  weather?: any;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  cityName,
  weather,
}) => {
  const { favoriteCities, addCity, removeCity } = useWeatherStore();

  // Проверка, находится ли город уже в избранном
  const isFavorite = favoriteCities.some((city) => city.name === cityName);

  const handleFavorite = () => {
    if (isFavorite) {
      removeCity(cityName); // Удаляем из избранного
    } else {
      const cityData: City = {
        name: cityName,
        weather: {
          temp: weather.main.temp,
          description: weather.weather[0].description,
          icon: weather.weather[0].icon,
        },
      };
      addCity(cityData);
    }
  };

  return (
    <button onClick={handleFavorite}>
      <MdFavorite color={isFavorite ? "red" : "black"} />
      {/* {isFavorite ? "Remove from Favorites" : "Add to Favorites"} */}
    </button>
  );
};

export default FavoriteButton;
