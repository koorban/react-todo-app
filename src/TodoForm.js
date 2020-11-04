import React, { useState, useContext } from 'react';
import { TodoContext } from './ContextTodo';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function TodoForm() {
    const { addTodo } = useContext(TodoContext);

    const [todo, setTodo] = useState({
        id: '',
        item: '',
        isDone: false
    });

    const handleChange = (e) => {
        let item = e.target.value;
        setTodo({
            id: new Date().getTime().toString(),
            isDone: false,
            item
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (todo.item) {
            addTodo(todo);
        } else {
            alert('form must be filled out!');
        };

        setTodo({
            id: '',
            item: '',
            isDone: false
        });
    };

    return (
        <Form inline onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    id="todo"
                    name="todo"
                    value={todo.item}
                    onChange={handleChange}
                    placeholder="Enter a Todo"
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Add Todo
            </Button> 
        </Form>
    )
};
