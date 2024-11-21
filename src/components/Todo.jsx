 import React from "react";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Todo = ({todo, removeTodo, completeTodo}) => {
    return (
        <li className="todo"
             style={{textDecoration: todo.isCompleted ? "line-through" : ""}}
        >
            <div className="content">
                <p>{todo.text}</p>
                <p className='category'>({todo.category})</p>
            </div>
            <div className="btn-content">
                <button onClick={() => completeTodo(todo.id)} className={`toggle-btn ${todo.isCompleted ? 'toggled' : ''}`} ><div className="thumb"></div></button>
                <button title="Excluir Tarefa" onClick={() => removeTodo(todo.id)} className="remove"> <FontAwesomeIcon icon={faTimes} /></button>
            </div>
        </li>
    )
}

export default Todo