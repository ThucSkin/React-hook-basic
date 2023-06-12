//props lấy giữ liệu từ tk cha xuống
const Todo = (props) => {
    //cha -> con
    const todos = props.todos;
    return (
        <div className='todos-container'>
            {todos.map(item => {
                return (
                    <div>
                        <li key={item.id} className='todos-child'>{item.id} - {item.name}</li>
                    </div>
                )
            })}
        </div>
    )
}

export default Todo;