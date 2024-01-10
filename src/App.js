
import './App.css';
import Weather from './Weather.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Weather App</h1>
        <Weather city="Manila" />
      </header>
    </div>
  );
}

export default App;
