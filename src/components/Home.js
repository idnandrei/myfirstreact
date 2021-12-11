import logo from "../logo.svg";
import "../App.css";
import Counter from "./counter";
import Greet from "./greet";

function Home() {
  return (
    <div className="Home">
      <header className="App-header">
        <h1>Employee List</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Greet name="Idan" />
        <h4>Hello! I'm a Counter</h4>
        <Counter />
      </header>
    </div>
  );
}

export default Home;
