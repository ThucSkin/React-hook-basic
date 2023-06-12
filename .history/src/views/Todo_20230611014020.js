//props lấy giữ liệu từ tk cha xuống
const Todo = (props) => {
    //cha -> con
    const todos = props.todoss;
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