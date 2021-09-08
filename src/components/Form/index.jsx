import { useState } from "react";
import "./index.css";
function Form({ addTodo }) {
  const [list, setList] = useState("");
  return (
    <div>
      <div className="main">
        <input
          type="text"
          value={list}
          onChange={(e) => setList(e.target.value)}
          placeholder="Digite aqui"
        />
        <button onClick={() => addTodo(list, setList)} className="button-add">
          Adicionar
        </button>
      </div>
    </div>
  );
}
export default Form;
