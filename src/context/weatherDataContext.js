import {createContext,useState} from 'react'
const WeatherContext = createContext()

const WeatherProvider = ({children})=>{
    const [selected, setSelected] = useState("Istanbul")
    const [weatherData, setWeatherData] = useState("nothing")

  // useEffect(() => {
  //   fetch(`http://api.openweathermap.org/data/2.5/weather?q=${selected}&units=metric&cnt=7&appid=3729444e5fb54634eff1e4e7722b1801`)
  //   .then(x => x.json())
  //   .then(data => {
  //     setWeatherData(data)})
  // }, [selected])
    return <WeatherContext value={weatherData} >{children}</WeatherContext>
}


export default WeatherContext