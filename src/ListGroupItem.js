import React, { useContext } from 'react';
import { TodoContext } from './ContextTodo';
import ListGroup from 'react-bootstrap/ListGroup';

export default function ListGroupItem({ id, item, isDone }) {
    const { updateIsDone, setIsTodoClicked } = useContext(TodoContext);

    const variant = isDone ? "success" : "danger";

    const handleClick = (e) => {
        updateIsDone(id);
        setIsTodoClicked(true);
    };

    return (
        <>
            { variant === 'success' && 
                <ListGroup.Item action variant="success">
                    {item}
                </ListGroup.Item>
            }
            
            { variant === 'danger' &&
                <ListGroup.Item action variant="danger" id={id} onClick={(e) => handleClick(e)}>
                    {item}
                </ListGroup.Item>
            }
        </>  
    );
};
