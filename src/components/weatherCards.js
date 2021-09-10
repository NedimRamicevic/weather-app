import React from 'react'

function WeatherCards({data}) {
    console.log(data)
    return (
    <div className="card" style={{width : "18rem"}}>
        {data ? (
            <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text">{data.weather[0].main}</p>            
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
