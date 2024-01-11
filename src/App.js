
import './App.css';
import Weather from './Weather.js';

function App() {
  return (
    <div className="App">
     
        <h1 className="header">My Weather App</h1>
        <br/>
        <Weather  />
        <br/>
        <p>Designed by <a href="https://www.shecodes.io/graduates/82140-cecille-speckmaier">CMSpeckmaier</a></p>
        <a href="https://github.com/Cecille-SheCodes/weather-react"> and is open-sourced in GitHub</a>
    </div>
  );
}

export default App;
