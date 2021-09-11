import Dropdown from './components/dropdown'
import WeatherCards from './components/weatherCards'
import {WeatherProvider} from './context/weatherDataContext'

import './App.css';

function App() {

  return (
    <div className="App">
      <WeatherProvider>
          <Dropdown />
        <WeatherCards />      
      </WeatherProvider>
    </div>
  );
}

export default App;
