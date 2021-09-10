import Dropdown from './components/dropdown'
import WeatherCards from './components/weatherCards'
import {useState,useEffect} from 'react'
import {WeatherProvider} from './context/weatherDataContext'
import {DropdownProvider} from './context/DropdwnContext'
import './App.css';

function App() {
  const [selected, setSelected] = useState("Istanbul")
  const [weatherData, setWeatherData] = useState("nothing")

  // useEffect(() => {
  //   fetch(`http://api.openweathermap.org/data/2.5/weather?q=${selected}&units=metric&cnt=7&appid=3729444e5fb54634eff1e4e7722b1801`)
  //   .then(x => x.json())
  //   .then(data => {
  //     setWeatherData(data)})
  // }, [selected])

  const handleChange = (value) => {
    setSelected(value)
  }
  return (
    <div className="App">
        <DropdownProvider>
          <Dropdown />
        </DropdownProvider>
      <WeatherProvider>
        <WeatherCards />      
      </WeatherProvider>
    </div>
  );
}

export default App;
