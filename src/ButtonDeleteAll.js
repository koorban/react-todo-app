import React, { useContext } from 'react';
import { TodoContext } from './ContextTodo';
import ButtonBadge from './ButtonBadge';
import Button from 'react-bootstrap/Button';

export default function ButtonDeleteAll() {

    const { deleteAllTodos, todos, setIsButtonDeleteAllClicked } = useContext(TodoContext);

    const handleClick = () => {
        if (todos.length > 0) {
            deleteAllTodos();
            setIsButtonDeleteAllClicked(true);
        } else {
            alert('List must be greater than zero!');
        }
    };

    return (
        <Button variant="primary" onClick={()=> handleClick()}>
            Delete All
            {(todos.length > 0) &&
                <ButtonBadge
                    badgeContent={todos.length}
                    srContent={'count for total'}
                    variant={'light'}
                />
            }
        </Button>
    )
};
