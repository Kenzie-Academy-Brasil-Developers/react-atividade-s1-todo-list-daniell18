function Todolist({ todos, handleTodo }) {
  return (
    <div>
      <ul>
        {todos.map((element, index) => (
          <div className="lista">
            <li className="lista-item" key={index}>
              {element}
            </li>
            <button
              className="button-rmv"
              onClick={() => {
                handleTodo(index);
              }}
            >
              Remover
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default Todolist;
