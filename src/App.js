import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/hello";
import Counter from "./components/counter";
import Greet from "./components/greet";
import Employee from "./components/Employee";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>EICCIN</p>
        <Greet name="Idan" />
        <p>{Hello()}</p>
        <Employee />
        <Counter />
      </header>
    </div>
  );
}

export default App;
