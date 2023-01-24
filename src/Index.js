import React, { useState } from "react";
import ReactDOM from "react-dom/client.js";
import TodoForm from "./components/TodoForm.js";
import TodoLists from "./components/TodoLists.js";


const AppLayout = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");
    const [editId, setEditId] = useState(0);

    const handleAdd = (e) => {
        e.preventDefault();
        if (editId) {

            const prevTodos = todos.filter((to) => {
                return to.id !== editId;
            })

            setTodos([...prevTodos, { id: editId, todo: todo }])

            setEditId(0);
            setTodo("");
            return;
        }

        if (todo !== "" && todo !== " ") {
            setTodos(prev => [...prev,
            { id: `${crypto.randomUUID()}`, todo: todo }]);
        }

        setTodo("");

    }

    const handleDelete = (id) => {
        const delTodo = todos.filter((t) => t.id !== id);
        setTodos([...delTodo])
    }

    const handleEdit = (id) => {
        const getId = todos.find((eid) => eid.id === id);
        setTodo(getId.todo);
        setEditId(id);
    }


    return (
        <>
            <div className="parent-container">
                <h1 className="app-heading">Todo App</h1>

                <TodoForm setTodo={setTodo} handleAdd={handleAdd} todo={todo} editId={editId} />

                <TodoLists handleDelete={handleDelete} handleEdit={handleEdit} todos={todos} />

            </div>
        </>
    )
}





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);