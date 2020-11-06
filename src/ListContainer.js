import React, { useContext } from 'react';
import { TodoContext } from './ContextTodo';
import List from './List';
import Col from 'react-bootstrap/Col';

export default function ListContainer() {
    const { completedTodos, uncompletedTodos } = useContext(TodoContext);

    return (
        <>
            <Col>
                <List contextInfo={uncompletedTodos} title='Completed' />
            </Col>
            <Col>
                <List contextInfo={completedTodos} title='Uncompleted' />
            </Col>   
        </>
    )
};
