import { useEffect, useState } from "react"; 
import { getWeatherData } from "./actions";
import { connect } from 'react-redux';

function App(props) {
  useEffect(() => {
    props.getWeatherData();
  },[])

  if (Object.keys(props.weatherData).length === 0) 
    return <div>Loading...</div>

  return (
    <div className="App">
      <h1>Toronto Weather</h1>
      <h2>August 8, 2021</h2>

      <table className="table">
        <thead>
          <tr>
            <th>weather_state_name</th>
            <th>weather_state_abbr</th>
            <th>created</th>
            <th>applicable_date</th>
            <th>the_temp</th>
            <th>humidity</th>
            <th>air_pressure</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.weatherData[0].weather_state_name}</td>
            <td>{props.weatherData[0].weather_state_abbr}</td>
            <td>{props.weatherData[0].created}</td>
            <td>{props.weatherData[0].applicable_date}</td>
            <td>{props.weatherData[0].the_temp}</td>
            <td>{props.weatherData[0].humidity}</td>
            <td>{props.weatherData[0].air_pressure}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { 
    weatherData: state.weatherData
  }
}

export default connect(mapStateToProps, {
  getWeatherData
})(App);
