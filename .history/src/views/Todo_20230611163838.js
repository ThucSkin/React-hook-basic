import { useState, useEffect } from 'react';



//props lấy giữ liệu từ tk cha xuống
const Todo = (props) => {
    //state hook
    let [name, setName] = useState('Thuc');
    const [age, setAge] = useState('');
    const [todos, setTodos] = useState([
        { id: '1', name: 'Lan' },
        { id: '2', name: 'CC' },
        { id: '2', name: 'game' }
    ])
    // didmount
    useEffect(() => {

    }, [age])

    const handleClickMe = () => {
        if (!age) {
            alert('Please enter a valid age');
            return
        }
        let newTodo = { id: Math.floor(Math.random() * 100) + 1, name: age };
        setTodos([...todos, newTodo])
        setAge('');
    }
    const handleAge = (e) => {
        setAge(e.target.value);
    }
    const deleteDataTodo = (id) => {
        let curentTodo = todos;
        curentTodo = curentTodo.filter(item => item.id !== id);
        setTodos(curentTodo);
    }
    //cha -> con
    const { todos, deleteDataTodo } = props;
    const handleDelete = (id) => {
        deleteDataTodo(id)
    }

    return (
        <div className='todos-container'>
            {todos.map(item => {
                return (
                    <div key={item.id}>
                        <li className='todos-child'>{item.id} - {item.name}
                            &nbsp; &nbsp;<span onClick={() => handleDelete(item.id)}>X</span></li>
                    </div>
                            <Todo
                      //props:value
                      todos={todos}
                      deleteDataTodo={deleteDataTodo}
                    />
                    <input type='text' value={age} onChange={(e) => handleAge(e)} />
                    <button onClick={() => handleClickMe()} type='button'>Click me!</button> }
            )
            })}
        </div>
    )
}

export default Todo;