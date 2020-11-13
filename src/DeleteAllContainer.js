import React, { useContext } from 'react';
import { TodoContext } from './ContextTodo';
import ButtonDelete from './ButtonDelete';

export default function ButtonRemoveAllContainer() {
    const { deleteAllTodos, todos, setIsButtonDeleteAllClicked } = useContext(TodoContext);

    return (
        <>
            <ButtonDelete 
                list={todos}
                removeList={deleteAllTodos}
                setButtonBoolean={setIsButtonDeleteAllClicked}
                alertMessage='The Todo list is empty!'
                buttonName='Delete All'
            />
        </>
    )
};
