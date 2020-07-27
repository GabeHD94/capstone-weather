import React, { useState, useEffect } from 'react';
import Clockstyle from '../clock.css'
import Clock from 'react-live-clock';
import Google from "../component/googleSearch"
import Date from "../component/date";
import { Spring } from 'react-spring/renderprops';
import Cookies from "js-cookie"


const api = {
  key: "dbe4e6036b179b241f68b078f58c0c5a",
  base: "https://api.openweathermap.org/data/2.5/"
}



const Data = props => {
  if (!Cookies.get("username")) {
    props.history.push("/")
    console.log(props.history)
  }

  // if (Cookies.remove("username")) {
  //   this.props.history.push("/");
  //   location.reload()
  // }

  const handleLogout = event => {
    event.preventDefault()
    Cookies.remove("username")
    props.history.push("/")
  }

  // const defaultloc = props => {
  //   if (Cookies.get("username")) {
  //     fetch(`${api.base}weather?q=${(Cookies.get("location"))}&units=imperial&APPID=${api.key}`)
  //       .then(response => response.json())
  //       .then(result => {
  //         setWeather(result);
  //         setQuery('');
  //         console.log(result)
  //       })
  //     }
  // }


  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = event => {
    if (event.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then(response => response.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result)
        })
    }
  }


  return (

    <div className="weatherdata">
      <div className="weatherApp">
        <div className="logoutbtn">
        <button onClick={handleLogout}>logout</button>
        </div>
        <main className="enter">
          <div className="searchBox">
            <input
              type="text"
              className="searchBar"
              placeholder="Enter City"
              onChange={event => setQuery(event.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
          <div>
            {(typeof weather.main != "undefined") ? (
              <Spring
                from={{ opacity: 0, marginTop: -500 }}
                to={{ opacity: 1, marginTop: 0 }}
              >
                {props => (
                  <div style={props}>
                    <div>
                      <div className='app'>
                        <div className="date-wrapper">
                          <Date />
                        </div>
                        <div className="clock-wrapper">
                        <Clock format={'hh:mm:a'} ticking={true} />
                        </div>
                        <div className="hi-wrap">
                          <h1>Hi {Cookies.get("username")}!</h1>
                        </div>
                        <Google />

                      </div>


                      <div className="weather-box">
                        <div className="temp">
                          {Math.round(weather.main.temp)}°F
                </div>
                        <div className="weather">
                          {weather.weather[0].main}
                        </div>

                        <div className="location-box">
                          <div className='location'>{weather.name}

                          </div>

                        </div>


                      </div>
                      <div className="weatherDetails" >
                        <div className="windSpeed">
                          <h1>Wind Speed</h1>
                          <div className="wind">
                            {Math.round(weather.wind.speed)} mph
                    </div>
                        </div>
                        <div className="humidity">
                          <h1>Humidity</h1>
                          <div className="humdata">
                            {weather.main.humidity}%
                  </div>
                        </div>
                        <div className="tempDetails">
                          <div className="temps">
                            <div className="min">
                              <h1>Min</h1>
                              <div className="minsize">
                                {Math.round(weather.main.temp_min)}°F
                            </div>
                            </div>
                            <div className="max">
                              <h1>Max</h1>
                              <div className="maxsize">
                                {Math.round(weather.main.temp_max)}°F
                          </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
                }
              </Spring >
            ) : (<div className="entercity"><h2>Enter a city</h2></div>)}
          </div>
        </main>
      </div>
    </div>
  );


}

export default Data;
