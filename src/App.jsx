import { useState, useRef } from "react";
import axios from "axios";
import "./App.css";
import WeatherInformations from "./components/WeatherInformations/WeatherInformations";
import WeatherInformations5Days from "./components/WeatherInformations5Days/WeatherInformations5Days";
import WeatherInformationsNone from "./components/WeatherInformationsNone/WeatherInformationsNone";

function App() {
  const [weather, setWeather] = useState();
  const [weather5Days, setWeather5Days] = useState();
  const inputRef = useRef();

  const key = "de8f6079c3e7d401b03b28f39899674a";

  async function searchCity() {
    const city = inputRef.current.value;
    if (!city) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt&units=metric`;
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt&units=metric`;

    const apiInfo = await axios.get(url);
    const apiInfo5Days = await axios.get(url5Days);

    setWeather(apiInfo.data);
    setWeather5Days(apiInfo5Days.data);

    console.log(apiInfo.data);
  }

  return (
    <div className="container">
      <h1>Previsão do Tempo</h1>

      <div className="search">
        <input ref={inputRef} type="text" placeholder="Digite o nome da cidade" />
        <button onClick={searchCity}>Pesquisar</button>
      </div>

      {weather ? (
        <WeatherInformations weather={weather} />
      ) : (
        <WeatherInformationsNone />
      )}

      {weather5Days && (
        <WeatherInformations5Days weather5Days={weather5Days} />
      )}
    </div>
  );
}

export default App;
