import React from 'react';
import ListGroupItem from './ListGroupItem';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function List({ contextInfo, title }) {
    
    return (
        <Card>
            <Card.Title className="text-center my-3">
                {title}
            </Card.Title>
            <ListGroup variant="flush">
                {contextInfo.map((todo) => {
                    return <ListGroupItem key={todo.id} {...todo} />
                })}
            </ListGroup>
        </Card>
    )
};
