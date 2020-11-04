import React, { useContext } from 'react';
import { TodoContext } from './ContextTodo';
import ListGroupItem from './ListGroupItem';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function FinishedTodoList() {
    const { completedTodos } = useContext(TodoContext);
  
    return (
        <Card>
            <Card.Title className="text-center my-3">
                Complete
            </Card.Title>
            <ListGroup variant="flush">
                {completedTodos.map((todo) => {
                    return <ListGroupItem {...todo} />
                })}
            </ListGroup>
        </Card>
    )
};
