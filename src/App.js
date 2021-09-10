import Dropdown from './components/dropdown'
import WeatherCards from './components/weatherCards'
import {useState} from 'react'
import './App.css';

function App() {
  const [selected, setSelected] = useState("İstanbul")
  const handleChange = (value) => {
    setSelected(value)
  }
  return (
    <div className="App">
      <Dropdown handleChange={handleChange}/> 
      <WeatherCards selected={selected} />      
    </div>
  );
}

export default App;
