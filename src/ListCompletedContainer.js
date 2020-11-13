import React, { useContext } from 'react';
import { TodoContext } from './ContextTodo';
import List from './List';

export default function ListCompletedContainer() {
    const { completedTodos } = useContext(TodoContext);

    return ( 
        <List contextInfo = { completedTodos } title = 'Completed' />
    )
};