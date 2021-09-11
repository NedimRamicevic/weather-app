import React,{useContext} from 'react'
import DropdownContext from '../context/DropdwnContext'
import WeatherContext from '../context/weatherDataContext'


function Dropdown() {
    console.log("neeeeedeeeeeensss")

    return (
        <div>
            <select
          id="great-names"
          >

          <option value="London">London</option>
          <option value="Münhen">Münhen</option>
          <option value="Istanbul">Istanbul</option>
          <option value="Paris">Paris</option>
          <option value="Sarajevo">Sarajevo</option>
        </select>
        </div>
    )
}

export default Dropdown
