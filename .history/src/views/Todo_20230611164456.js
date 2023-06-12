import React, { useState, useEffect } from 'react';

const Todo = (props) => {
    const [age, setAge] = useState('');
    const [todos, setTodos] = useState([
        { id: '1', name: 'Lan' },
        { id: '2', name: 'CC' },
        { id: '3', name: 'game' }
    ]);

    useEffect(() => {
        // componentDidMount logic can be added here
    }, [age]);

    const handleClickMe = () => {
        if (!age) {
            alert('Please enter a valid age');
            return;
        }
        const newTodo = { id: Math.floor(Math.random() * 100) + 1, name: age };
        setTodos([...todos, newTodo]);
        setAge('');
    };

    const handleAge = (e) => {
        setAge(e.target.value);
    };

    const deleteDataTodo = (id) => {
        const updatedTodos = todos.filter(item => item.id !== id);
        setTodos(updatedTodos);
    };

    const handleDelete = (id) => {
        deleteDataTodo(id);
    };

    return (
        <div className='todos-container'>
            {todos.map(item => (
                <div key={item.id}>
                    <li className='todos-child'>
                        {item.id} - {item.name}
                        &nbsp; &nbsp;<span onClick={() => handleDelete(item.id)}>X</span>
                    </li>
                </div>
            ))}
            <input type='text' value={age} onChange={(e) => handleAge(e)} />
            <button onClick={() => handleClickMe()} type='button'>Click me!</button>
        </div>
    );
};

export default Todo;
