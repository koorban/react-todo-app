import React, { useContext } from 'react';
import { TodoContext } from './ContextTodo';
import ButtonBadge from './ButtonBadge';
import Button from 'react-bootstrap/Button';

export default function ButtonDeleteUncompletedList() {

    const { deleteUncompletedTodos, uncompletedTodos, setIsButtonDeleteUncompletedClicked } = useContext(TodoContext);

    const handleClick = () => {
        if (uncompletedTodos.length > 0) {
            deleteUncompletedTodos();
            setIsButtonDeleteUncompletedClicked(true);
        } else {
            alert('List must be greater than zero!');
        }
    };

    return (
        <Button variant="primary" onClick={()=> handleClick()}>
            Delete Uncompleted Todos
            {(uncompletedTodos.length > 0) &&
                <ButtonBadge
                    badgeContent={uncompletedTodos.length}
                    srContent={'number of uncompleted todos'}
                    variant={'light'}
                />
            }
        </Button>
    )
};
