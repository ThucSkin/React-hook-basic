//props lấy giữ liệu từ tk cha xuống
const Todo = (props) => {
    //cha -> con
    const { todosss } = props;
    const handleDelete = () => {
        alert(props.todos.id)

    }

    return (
        <div className='todos-container'>
            {todosss.map(item => {
                return (
                    <div key={item.id}>
                        <li className='todos-child'>{item.id} - {item.name}
                            &nbsp; &nbsp;<span onClick={() => handleDelete(item.id)}>X</span></li>

                    </div>
                )
            })}
        </div>
    )
}

export default Todo;