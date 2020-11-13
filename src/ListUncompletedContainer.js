import React, { useContext } from 'react';
import { TodoContext } from './ContextTodo';
import List from './List';

export default function ListContainer() {
    const { uncompletedTodos } = useContext(TodoContext);

    return (
        <List contextInfo={uncompletedTodos} title='Uncompleted' />
    )
};
