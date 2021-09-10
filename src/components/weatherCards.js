import React from 'react'

function WeatherCards({selected}) {
    return (
    <div className="card" style={{width : "18rem"}}>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>            
            <div className="degrees">
                <h2 className="card-degree" >15</h2>
                <h2 className="card-degree" >15</h2>
            </div>
        </div>
    </div>
    )
}

export default WeatherCards
