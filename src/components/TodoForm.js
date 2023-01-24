import React from "react";

const TodoForm = ({
    handleAdd,
    todo,
    editId,
    setTodo
}) => {
    return (
        <div className="add-edit-div">
            <form onSubmit={handleAdd}>

                <input className="input-style" type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button type="submit" className="btn btn-add" >{editId ? "Edit" : "Add"}</button>

            </form>
        </div>
    )
}

export default TodoForm;