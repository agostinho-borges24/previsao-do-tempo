/* eslint-disable react/prop-types */
import "./WeatherInformations.css";

function WeatherInformations({ weather }) {

  return (
    <div className="weather-container">
      <h2>{weather.name}</h2>

      <div className="weather-info">
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          alt=""
        />
        <p className="temperature">{Math.round(weather.main.temp)}ºC</p>
      </div>
      <p className="description">{weather.weather[0].description} </p>
      <div className="details">
        <p><img width="32" height="32" src="https://img.icons8.com/windows/32/heating.png" alt="heating"/>Sensação têrmica: {Math.round(weather.main.feels_like)}ºC </p>
        <p><img width="35" height="35" src="https://img.icons8.com/ios-filled/50/wet.png" alt="wet"/>Umidade: {weather.main.humidity}% </p>
        <p><img width="35" height="35" src="https://img.icons8.com/fluency-systems-filled/35/atmospheric-pressure.png" alt="atmospheric-pressure"/>Pressão: {weather.main.pressure} </p>
      </div>
    </div>
  );
}

export default WeatherInformations;
