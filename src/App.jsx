import { useState } from 'react';
import Todo from './components/Todo.jsx';
import TodoForm from "./components/TodoForm.jsx";
import Search from "./components/Search.jsx";
import styles from './App.module.css';
function App() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "Criar Funcionalidade de Listagem no sistema",
            category: "Trabalho",
            isCompleted: false,
        },
        {
            id: 2,
            text: "Ir para a academia",
            category: "Pessoal",
            isCompleted: false,
        },
        {
            id: 3,
            text: "Estudar React",
            category: "Estudos",
            isCompleted: false,
        },
    ]);

    const [search, setSearch] = useState("");

    const addTodo = (text, category) => {
        const newTodos = [
            ...todos,
            {
                id: Math.floor(Math.random() * 10000),
                text,
                category,
                isCompleted: false,
            },
        ];
        setTodos(newTodos);
    };

    const removeTodo = (id) => {
        const filteredTodos = todos.filter((todo) => todo.id !== id);
        setTodos(filteredTodos);
    };

    const completeTodo = (id) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        );
        setTodos(updatedTodos);
    };

    const todoContent = todos.filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
        .map((todo) => ( <Todo key={todo.id} completeTodo={completeTodo} removeTodo={removeTodo} todo={todo} />))

    return (
        <main className={styles.app}>
            <header>
                <h1>Lista de tarefas</h1>
                <Search search={search} setSearch={setSearch} />
            </header>
            <section>
                <ul className={styles.todoList}>
                    {todoContent}
                </ul>
            </section>
            <footer>
                <TodoForm addTodo={addTodo} />
            </footer>
        </main>
    );
}

export default App;
