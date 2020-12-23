import logo from './logo.svg';
import './App.css';
import ToggleStatus from 'toggle-status';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}



function Home() {
  const [isOn, setIsOn] = ToggleStatus(true);

  return (
    <div className="App" style={{ background: isOn ? '#0d1117' : '#f9f9f9' }}>
      <header className="App-header">
        <h1>This is only for test</h1>
        <h3>My name is Saeed</h3>
        <button onClick={() => setIsOn(isOn => !isOn)}>{`Theme Black is ${isOn}`}</button>
      </header>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}