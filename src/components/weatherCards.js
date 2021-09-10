import React from 'react'

function WeatherCards({datas}) {
    console.log(datas)
    return (
    <div className="card-list">
        {datas ? (
            datas.map()
        ):null}
    </div>
    )
}

export default WeatherCards
