
const Todo = () => {
    const todos = props.todos;
    return (
        <div className='todos-container'>
            {todos.map(item => {
                return (
                    <li key={item.id} className='todos-child'>{item.id} - {item.name}</li>
                )
            })}
        </div>
    )
}

export default Todo;