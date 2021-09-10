import React from 'react'

function Dropdown({handleChange}) {
    return (
        <div>
            <select
          id="great-names"
          onChange={(e)=>handleChange(e.target.value)}>

          <option value="Frarthur">Frarthur</option>
          <option value="Gromulus">Gromulus</option>
          <option value="Thinkpiece">Thinkpiece</option>
        </select>
        </div>
    )
}

export default Dropdown
