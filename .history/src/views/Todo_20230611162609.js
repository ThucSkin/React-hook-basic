//props lấy giữ liệu từ tk cha xuống
const Todo = (props) => {
    //cha -> con
    const { todos, deleteDataTodo } = props;
    const handleDelete = (id) => {
        deleteDataTodo(id)
    }

    return (
        <div className='todos-container'>
            {todos.map(item => {
                return (
                    <>
                        <div key={item.id}>
                            <li className='todos-child'>{item.id} - {item.name}
                                &nbsp; &nbsp;<span onClick={() => handleDelete(item.id)}>X</span></li>
                        </div>
                        <input type='text' value={age} onChange={(e) => handleAge(e)} />
                        <button onClick={() => handleClickMe()} type='button'>Click me!</button>
                    </>
                )
            })}
        </div>
    )
}

export default Todo;