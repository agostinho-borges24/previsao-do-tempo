import { useEffect, useState } from "react";
import axios from "axios";
import "./WeatherInformationsNone.css";

function WeatherInformationsNone() {
  const [weather, setWeather] = useState();
  const [error, setError] = useState(false);

  const key = "de8f6079c3e7d401b03b28f39899674a";

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&lang=pt_br&units=metric`;
            const response = await axios.get(url);
            setWeather(response.data);
          } catch {
            setError(true);
          }
        },
        () => setError(true),
      );
    } else {
      setError(true);
    }
  }, []);

  if (error) {
    return (
      <div className="no-search">
        <h3>Como está o clima na sua localização?</h3>
        <p>Ative a localização para ver o clima automaticamente</p>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="no-search">
        <p>Obtendo clima a partir da sua localização...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="weather-container">
        <h2>{weather.name}</h2>

        <div className="weather-info">
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="Clima"
          />
          <p className="temperature">{Math.round(weather.main.temp)}°C</p>
        </div>
        <p className="description">{weather.weather[0].description}</p>
        <div className="details">
        <p><img width="35" height="35" src="https://img.icons8.com/windows/35/heating.png" alt="heating"/>Sensação têrmica: {Math.round(weather.main.feels_like)}ºC </p>
        <p><img width="35" height="35" src="https://img.icons8.com/ios-filled/50/wet.png" alt="wet"/>Umidade: {weather.main.humidity}% </p>
        <p><img width="35" height="35" src="https://img.icons8.com/fluency-systems-filled/35/atmospheric-pressure.png" alt="atmospheric-pressure"/>Pressão: {weather.main.pressure} </p>
      </div>
      </div>
    </div>
  );
}

export default WeatherInformationsNone;
