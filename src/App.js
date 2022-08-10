
import './App.css';

function App() {
  return (
    <div>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <div class="container">
      <div class="head mt-4 weather-app">
        <div class="row">
          <form class="mx-3 my-5">
            <div class="row">
              <div class="col-8">
                <input
                  class="form-control"
                  type="text"
                  id="enter-city"
                  placeholder="Enter a city.."
                  autocomplete="off"
                />
              </div>
              <div class="col-4">
                <button class="btn btn-success">search</button>
              </div>
            </div>
          </form>
          <div class="row">
            <div class="col-7 Isfahan">
              <div class="targetcity m-3">
                <p id="show-city">Isfahan</p>
                <span id="date">Sun, January 30</span>
                <span class="camo"> ,</span>
                <span id="time"> 5:42 PM</span>
                <br />
                <span id="humid">Humidity: 16%</span>
                <span class="camo"> ,</span>
                <span id="wind"> wind spead: 1 km/h</span>
                <br />
                <span id="desc">clear</span>
              </div>
            </div>
            <div class="col-5 my-3">
              <span class="curWeather">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
                  id="icon"
                />
              </span>
              <span>
                <span id="weath">15</span>
                <a href="#" id="cel">
                  °C{" "}
                </a>{" "}
                |{" "}
                <a href="#" id="fahrenheit">
                  °F
                </a>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
