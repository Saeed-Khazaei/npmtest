import logo from './logo.svg';
import './App.css';
import ToggleStatus from 'toggle-status';

function App() {

  const [isOn, setIsOn] = ToggleStatus(true);

  return (
    <div className="App" style={{background:isOn?'#0d1117':'#f9f9f9'}}>
      <header className="App-header">
        <h1>This is only for test</h1>
        <h3>My name is Saeed</h3>
        <button onClick={() => setIsOn(isOn => !isOn)}>{`Theme Black is ${isOn}`}</button>
      </header>
    </div>
  );
}

export default App;
