import { getLocalDate, getLocalTime } from "../utils/TimeModifier";

export default function Weather({ w }) {
  return (
    <main className="container weather-container">
      <div className="card weather-card">
        <div className="card-header">
          <h1>{w.name}</h1>
          <button
            className="btn primary-btn refresh-btn"
            onClick={() => history.go(0)}
          >
            Refresh
          </button>
        </div>

        <div className="card-body">
          <div className="time-info-wrapper">
            <h2>{getLocalDate(new Date())}</h2>
            <h2>{w.weather[0].description}</h2>
          </div>

          <div className="temp-info-wrapper">
            <p>
              Temperature: {w.main.temp} <sup>o</sup>C
            </p>
            <p>Humidity: {w.main.humidity} %</p>
          </div>

          <div className="sun-info-wrapper">
            <p>Sunrise: {getLocalTime(w.sys.sunrise)}</p>
            <p>Sunset: {getLocalTime(w.sys.sunset)}</p>
          </div>
        </div>

        {/* <div className="card-footer">
          <button className="btn primary-btn" onClick={getPosition}>
            Get Info
          </button>
        </div> */}
      </div>
    </main>
  );
}
