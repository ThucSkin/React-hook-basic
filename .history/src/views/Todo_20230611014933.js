//props lấy giữ liệu từ tk cha xuống
const Todo = (props) => {
    //cha -> con
    const todos = props.todos;
    return (
        <div className='todos-container'>
            {todos.map(item => {
                return (
                    <div key={item.id}>
                        <li className='todos-child'>{item.id} - {item.name}</li><span>X</span>

                    </div>
                )
            })}
        </div>
    )
}

export default Todo;