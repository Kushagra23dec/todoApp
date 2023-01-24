import React from "react"


const TodoLists = ({
    handleDelete,
    handleEdit,
    todos
}) => {
    return (
        <ul className="todo-lists">
            {
                todos.map((t) => {
                    return (
                        <li className="singleTodo" key={t.id}>
                            <span className="todoText">{t.todo}</span>
                            <button className=" btn btn-edit" onClick={() => { handleEdit(t.id) }}>Edit</button>
                            <button className=" btn btn-del" onClick={() => { handleDelete(t.id) }}>Delete</button>
                        </li>
                    )
                })}
        </ul>

    )
}


export default TodoLists;


