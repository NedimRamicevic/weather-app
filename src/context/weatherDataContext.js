import {createContext,useState,useEffect,useReducer} from 'react'
const WeatherContext = createContext()
// }
export const WeatherProvider = ({children})=>{
   
    const [selected, setSelected] = useState("London")
    const [weatherData, setWeatherData] = useState()
    const handleChange = (value) => {
        setSelected(value.target.value)
      }
  useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${selected}&units=metric&cnt=7&appid=3729444e5fb54634eff1e4e7722b1801`)
    .then(x => x.json())
    .then(data => {
      setWeatherData(data)
    })
  }, [selected])

    return (

    <div>
        {
        weatherData ? (<WeatherContext.Provider value={{weatherData,handleChange}} >{children}</WeatherContext.Provider>):null
    }
    </div>
    
    )
}


export default WeatherContext