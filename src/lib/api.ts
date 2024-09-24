import { ForecastData } from '@/types/weather';
import axios from 'axios';

const API_KEY = '5594cddffb0d0d07a203804298af53e3';  // Вставь свой API-ключ OpenWeatherMap
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

export const getWeatherData = async (city: string) => {
  try {
    const response = await axios.get(`${BASE_URL}weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching current weather data', error);
    throw error;
  }
};

export const getForecastData = async (city: string): Promise<ForecastData> => {
  try {
    const response = await axios.get(`${BASE_URL}forecast`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data; // Убедитесь, что вы возвращаете данные правильно
  } catch (error) {
    console.error('Error fetching forecast data', error);
    throw error;
  }
};