import React from 'react'

function Dropdown({handleChange}) {
    return (
        <div>
            <select
          id="great-names"
          onChange={(e)=>handleChange(e.target.value)}>

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
