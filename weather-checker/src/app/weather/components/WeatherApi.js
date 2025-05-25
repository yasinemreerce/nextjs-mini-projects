'use client'

import { useEffect, useState } from 'react';
import styles from "./WeatherApi.module.css";
import weatherIcons from "../../../../data/weatherIcons.json";


export default function WeatherApi({ city }) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=tr&appid=${apiKey}`);
        if (!res.ok) throw new Error("API isteği başarısız");

        const data = await res.json();
        setWeather(data);
        console.log("Hava durumu verisi:", data);
      } catch (err) {
        setError(err.message);
        console.error("Hava durumu alınırken hata:", err);
      }
    };

    fetchWeather();
  }, [city]);

  if (error) return <p>Hata: {error}</p>;

  return (
    <div className={styles.containerWeather}>
      {weather ? (
        <div className={styles.tempText}>
          <img 
            src={weatherIcons[weather.weather[0].main]?.icon || "/icons/default.svg"} 
            alt={weatherIcons[weather.weather[0].main]?.label || "Bilinmeyen hava durumu"}
            className={styles.weather_img}
          />
          {weather.main.temp}°C
        </div>
      ) : (
        <div>
          <div className={styles.tempText}></div>
          <div className={styles.paragraph}>Lütfen bir şehir seçin...</div>
        </div>
      )}
    </div>
  );
}
