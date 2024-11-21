 import React from "react";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faTimes } from "@fortawesome/free-solid-svg-icons";
 import styles from './Todo.module.css';

const Todo = ({todo, removeTodo, completeTodo}) => {
    return (
        <li className={styles.todo}
             style={{textDecoration: todo.isCompleted ? "line-through" : ""}}
        >
            <div>
                <p>{todo.text}</p>
                <p>({todo.category})</p>
            </div>
            <div className={styles.btnContent}>
                <button onClick={() => completeTodo(todo.id)} className={`${styles.toggleBtn} ${todo.isCompleted ? styles.toggled : ''}`} >
                    <div className={styles.thumb}></div>
                </button>
                <button title="Excluir Tarefa" onClick={() => removeTodo(todo.id)} className={styles.remove}> <FontAwesomeIcon icon={faTimes} /></button>
            </div>
        </li>
    )
}

export default Todo