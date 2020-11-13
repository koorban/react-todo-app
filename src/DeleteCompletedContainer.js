import React, { useContext } from 'react';
import { TodoContext } from './ContextTodo';
import ButtonDelete from './ButtonDelete';

export default function RemoveCompletedContainer() {
    const { deleteCompletedTodos, completedTodos, setIsButtonDeleteCompletedClicked } = useContext(TodoContext);

    return (
        <>
            <ButtonDelete 
                list={completedTodos}
                removeList={deleteCompletedTodos}
                setButtonBoolean={setIsButtonDeleteCompletedClicked}
                alertMessage='The Completed list is empty!'
                buttonName='Delete All Completed'
            />
        </>
    )
};
