export default async function fetchWeather(lat, long) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${
    import.meta.env.VITE_WEATHER_API_KEY
  }&units=metric`;

  const res = await fetch(url, {
    cache: "no-cache",
    referrerPolicy: "no-referrer"
  });

  return await res.json();
}
