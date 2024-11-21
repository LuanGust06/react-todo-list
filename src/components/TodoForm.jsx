import React, { useState } from "react";
import styles from './TodoForm.module.css';
const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!value || !category) return;
        addTodo(value, category);
        setValue("");
        setCategory("");
    };

    return (
        <div className={styles.todoForm}>
            <h2>Criar Nova Tarefa</h2>
            <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="task-title">Título</label>
                        <input
                            id="task-title"
                            type="text"
                            placeholder="Digite o título"
                            value={value}
                            onChange={(event) => setValue(event.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="task-category">Categoria</label>
                        <select
                            id="task-category"
                            value={category}
                            onChange={(event) => setCategory(event.target.value)}
                            required
                        >
                            <option value="">Selecione uma categoria</option>
                            <option value="Trabalho">Trabalho</option>
                            <option value="Pessoal">Pessoal</option>
                            <option value="Estudos">Estudos</option>
                        </select>
                    </div>

                    <button type="submit">Criar nova tarefa</button>
            </form>
        </div>
    );
};

export default TodoForm;
