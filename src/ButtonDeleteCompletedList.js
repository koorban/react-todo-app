import React, { useContext } from 'react';
import { TodoContext } from './ContextTodo';
import ButtonBadge from './ButtonBadge';
import Button from 'react-bootstrap/Button';

export default function ButtonDeleteCompletedList() {
    const { deleteCompletedTodos, completedTodos, setIsButtonDeleteCompletedClicked } = useContext(TodoContext);

    const handleClick = () => {
        if (completedTodos.length > 0) {
            deleteCompletedTodos();
            setIsButtonDeleteCompletedClicked(true);
        } else {
            alert('List must be greater than zero!!');
        }
    };

    return (
        <Button variant="primary" onClick={() => handleClick()}>
            Delete Completed Todos
            {(completedTodos.length > 0) && 
                <ButtonBadge
                    badgeContent={completedTodos.length}
                    srContent={'number of completed todos'}
                    variant={'light'}
                />
            }
        </Button>
    )
};
