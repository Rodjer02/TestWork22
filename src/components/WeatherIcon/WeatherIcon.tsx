const WeatherIcon = ({ icon }: { icon: string }) => {
  // Ссылки на иконки OpenWeatherMap
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div>
      <img src={iconUrl} alt={icon} />
    </div>
  );
};

export default WeatherIcon;
