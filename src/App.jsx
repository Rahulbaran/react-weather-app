import React, { useEffect, useState } from "react";

/* Components */
import Weather from "./components/Weather";

/* utils */
import fetchWeather from "./utils/FetchWeather";

export default function App() {
  const [loc, setLoc] = useState({
    lat: 45.34,
    long: 45.43
  });
  const [weatherData, setWeatherData] = useState("");

  useEffect(() => {
    getPosition();

    fetchWeather(loc.lat, loc.long)
      .then(res => setWeatherData(res))
      .catch(rej => console.error(rej));
  }, [loc]);

  const getPosition = () => {
    const success = pos =>
      setLoc({ lat: pos.coords.latitude, long: pos.coords.longitude });
    const error = err => {
      throw Error(err);
    };

    navigator.geolocation.getCurrentPosition(success, error, {
      enableHighAccuracy: true,
      timeout: 15000
    });
  };

  return (
    <React.Fragment>
      {weatherData && <Weather getPosition={getPosition} w={weatherData} />}
    </React.Fragment>
  );
}
