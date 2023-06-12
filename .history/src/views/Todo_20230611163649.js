import { useState, useEffect } from 'react';

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
                )
            })}
        </div>
    )
}

export default Todo;