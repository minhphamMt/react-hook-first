const Todo = (props) => {
  let { todo, handleDelete } = props;
  const buttonDelete = (obj) => {
    handleDelete(obj);
  };
  return (
    <div className="todos_container">
      {todo.map((item, index) => {
        return (
          <div key={item.id}>
            <li className="todo-child">
              {item.title} <button onClick={() => buttonDelete(item)}>x</button>
            </li>
          </div>
        );
      })}
    </div>
  );
};
export default Todo;
