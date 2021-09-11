import {createContext,useState,useEffect} from 'react'
const WeatherContext = createContext()

export const WeatherProvider = ({children})=>{
   
    const [selected, setSelected] = useState("Istanbul")
    const [weatherData, setWeatherData] = useState("nothing")
    const getData = (value) =>{
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${selected}&units=metric&cnt=7&appid=3729444e5fb54634eff1e4e7722b1801`)
    .then(x => x.json())
    .then(data => {
      setWeatherData(data)
    })
    }
    const handleChange = (value) => {
        setSelected(value)
        getData(value)
      }
  useEffect(() => {
    getData(selected)
    console.log("naber")
  }, [])

    return (

    <div>
        {
        weatherData ? (<WeatherContext.Provider value={{weatherData,handleChange}} >{children}</WeatherContext.Provider>):null
    }
    </div>
    
    )
}


export default WeatherContext