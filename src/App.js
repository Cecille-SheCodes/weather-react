
import './App.css';
import Weather from './Weather.js';

function App() {
  return (
    <div className="App">
     
        <h1 className="header">My Weather App</h1>
        <br/>
        <Weather  />
        <br/>
        <p className="links">Designed by <a href="https://www.shecodes.io/graduates/82140-cecille-speckmaier">CMSpeckmaier</a> and open-sourced in <a href="https://github.com/Cecille-SheCodes/weather-react">GitHub</a></p>
        
    </div>
  );
}

export default App;
