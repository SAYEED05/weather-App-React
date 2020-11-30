import React, { useState } from "react";


/* function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('./assets/icons/', false, /\.(png|jpe?g|svg)$/));
console.log(images) */


function App() {

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const wholedate = (d) => {
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = d.getDate();
    const day = days[d.getDay()];
    const year = d.getFullYear();
    const month = months[d.getMonth()];

    return `${day}, ${date} ${month} ${year}`;
  };
  const api = {
    base: "https://api.openweathermap.org/data/2.5/",
    key: process.env.REACT_APP_WEATHER_API_KEY,
  };

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&APPID=${api.key}&units=metric`)
        .then((res) => res.json())
        .then((data) => {
          setWeather(data);
          setQuery("");
          var weatherDesc = data.weather[0].main;
          var iconCode = data.weather[0].icon;
          const ico = document.getElementById("icon"); 
          //url for image fetch from online
          /* var iconUrl =
            "https://openweathermap.org/img/wn/" + iconCode + "@4x.png";
             ico.innerHTML = `<img src="${iconUrl}" alt="${weatherDesc}" srcset=""> <h3>${weatherDesc}`; */

          //Local images
          const locImg=process.env.PUBLIC_URL+'/assets/icons/'+iconCode+'.png';

          ico.innerHTML = `<img id='weatherImg' src=${locImg} alt="${weatherDesc}" srcset=""> <h3>${weatherDesc}`;

         
      

        })
        .catch((err) => console.error(err));
    }
  };
  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
        />
      </div>
      {typeof weather.main != "undefined" ? (
        <div className="container">
          <div className="date">{wholedate(new Date())} </div>
          <div className="weather-box">
            <div className="wethmain"></div>
            <div id="icon"></div>
            <div className="location">
              {weather.name} , {weather.sys.country}
            </div>
            <div className="temp">{Math.floor(weather.main.temp)}&#176;</div>
            <div className="misc">
              <ul>
                <li>
                  <i className="fas fa-wind"></i>
                  {"  "}
                  {Math.floor(weather.wind.speed)}m/s
                </li>
                <li>
                  <i className="fas fa-tint"></i>{" "}
                  {Math.floor(weather.main.humidity)}%
                </li>
                <li>
                  <i className="fas fa-water"></i>{" "}
                  {Math.floor(weather.main.pressure)}hpa
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
