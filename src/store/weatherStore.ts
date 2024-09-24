import { WeatherState } from '@/types/weather';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';



export const useWeatherStore = create<WeatherState>()(
  persist(
    (set) => ({
      favoriteCities: [],
      currentCity: 'Astana', // Город по умолчанию
      setCurrentCity: (cityName) => set({ currentCity: cityName }),
      addCity: (city) => set((state) => {
        const cityExists = state.favoriteCities.some(c => c.name === city.name);
        if (!cityExists) {
          return { favoriteCities: [...state.favoriteCities, city] };
        }
        return state;
      }),
      removeCity: (cityName) => set((state) => ({
        favoriteCities: state.favoriteCities.filter((city) => city.name !== cityName),
      })),
    }),
    {
      name: 'weather-storage', 
    }
  )
);