import logo from "./logo.svg";
import "./App.scss";
import Nav from "./views/Nav";
import { useState, useEffect } from "react";
import Todo from "./views/todos";
import Covid from "./views/Covid";
const App = () => {
  const handleDelete = (obj) => {
    let deletetodo = todo;
    deletetodo = deletetodo.filter((item, index) => {
      return item.id !== obj.id;
    });
    setTodos(deletetodo);
    setName("minh");
  };
  const handleOnClick = (event) => {
    if (!address) {
      alert("missing data");
      return;
    }
    let x = Math.random() * 1000;
    let todo1 = { id: x, title: address };
    setTodos([...todo, todo1]);
    setAddress("");
  };
  const handleOnChange = (event) => {
    setAddress(event.target.value);
  };
  const [name, setName] = useState("minh");
  let [address, setAddress] = useState("");
  const [todo, setTodos] = useState([
    { id: "todo1", title: "minhpham" },
    { id: "todo2", title: "minhthu" },
    { id: "todo3", title: "thunguyen" },
  ]);
  useEffect(() => {
    // console.log("get address");
  }, [address]);
  useEffect(() => {
    // console.log("get delete");
  }, [todo]);
  return (
    <>
      <Nav />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>hello world with react hook with {name}</div>
          <Todo todo={todo} handleDelete={handleDelete} />
          <input
            type="text"
            placeholder="hãy nhập vào đây"
            value={address}
            onChange={(event) => handleOnChange(event)}
          />
          <button type="button" onClick={(event) => handleOnClick(event)}>
            click me
          </button>
          <Covid />
        </header>
      </div>
    </>
  );
};

export default App;
