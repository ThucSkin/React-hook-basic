
const Todo = (props) => {
    const todo = props.todos;
    return (
        <div className='todos-container'>
            {todo.map(item => {
                return (
                    <li key={item.id} className='todos-child'>{item.id} - {item.name}</li>
                )
            })}
        </div>
    )
}

export default Todo;