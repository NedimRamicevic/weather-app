import WeatherContext from '../context/weatherDataContext'
import {React, useContext} from 'react'

function WeatherCards() {
    const veri = useContext(WeatherContext)
    const data = veri.weatherData
    return (
    <div className="card" style={{width : "18rem"}}>
        {data.main ? (
            <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text">{data.weather.main}</p>            
            <div className="degrees">
                <h2 className="card-degree" >{data.main.temp_min}</h2>
                <h2 className="card-degree" >{data.main.temp_max}</h2>
            </div>
        </div>
        ):null}
    </div>
    )
}

export default WeatherCards
