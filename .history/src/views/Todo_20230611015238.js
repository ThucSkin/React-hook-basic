//props lấy giữ liệu từ tk cha xuống
const Todo = (props) => {
    //cha -> con
    const { todos } = props;
    const handleDelete = () => {
        alert('msg')
    }

    return (
        <div className='todos-container'>
            {todos.map(item => {
                return (
                    <div key={item.id}>
                        <li className='todos-child'>{item.id} - {item.name} <span>X</span></li>

                    </div>
                )
            })}
        </div>
    )
}

export default Todo;