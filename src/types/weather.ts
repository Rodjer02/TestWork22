export interface Coord {
    lon: number;
    lat: number;
  }
  
  export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
  }
  
  export interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;
    grnd_level?: number;
  }
  
  export interface Wind {
    speed: number;
    deg: number;
  }
  
  export interface Clouds {
    all: number;
  }
  
  export interface Sys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  }
  
  export interface WeatherData {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
  }

  export interface ForecastItem {
    dt: number;
    main: Main;
    weather: Weather[];
    clouds: Clouds;
    wind: Wind;
    sys: Sys;
    dt_txt: string;
  }
  
  export interface ForecasCity {
    id: number;
    name: string;
    coord: Coord;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  }
  
  export interface ForecastData {
    cod: string;
    message: number;
    cnt: number;
    list: ForecastItem[];
    city: ForecasCity;
  }
  
  export interface City {
    name: string;
    weather?: {
      temp: number;
      description: string;
      icon: string;
    };
  }
  
  export interface WeatherState {
    favoriteCities: City[];
    currentCity: string; 
    setCurrentCity: (cityName: string) => void; 
    addCity: (city: City) => void; 
    removeCity: (cityName: string) => void; 
  }