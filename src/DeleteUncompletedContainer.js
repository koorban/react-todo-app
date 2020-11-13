import React, { useContext } from 'react';
import { TodoContext } from './ContextTodo';
import ButtonDelete from './ButtonDelete';

export default function RemoveUncompletedContainer() {
    const { deleteUncompletedTodos, uncompletedTodos, setIsButtonDeleteUncompletedClicked } = useContext(TodoContext);

    return (
        <>
            <ButtonDelete
                list={uncompletedTodos}
                removeList={deleteUncompletedTodos}
                setButtonBoolean={setIsButtonDeleteUncompletedClicked}
                alertMessage='The Uncompleted list is empty!'
                buttonName='Delete All Uncompleted'
            />
        </> 
    )
};
