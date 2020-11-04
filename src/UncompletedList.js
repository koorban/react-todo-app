import React, { useContext } from 'react';
import { TodoContext } from './ContextTodo';
import ListGroupItem from './ListGroupItem';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function UncompletedList() {
    const { uncompletedTodos } = useContext(TodoContext);

    return (
        <Card>
            <Card.Title className="text-center my-3">
                Incomplete
            </Card.Title>
            <ListGroup variant="flush">
                {uncompletedTodos.map((todo) => {
                    return <ListGroupItem key={todo.id} {...todo} />
                })}
            </ListGroup>
        </Card>
    )
};
