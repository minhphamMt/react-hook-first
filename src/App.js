import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
const App = () => {
  return (
    <>
      <Nav />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>hello world with react hook</div>
        </header>
      </div>
    </>
  );
};

export default App;
