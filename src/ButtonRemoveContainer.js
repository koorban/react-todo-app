import React, { useContext } from 'react';
import { TodoContext } from './ContextTodo';
import ButtonRemove from './ButtonRemove';

import Col from 'react-bootstrap/Col';

export default function ButtonContainer() {
  const {
        deleteUncompletedTodos,
        uncompletedTodos,
        setIsButtonDeleteUncompletedClicked,

        deleteCompletedTodos,
        completedTodos,
        setIsButtonDeleteCompletedClicked,

        deleteAllTodos,
        todos,
        setIsButtonDeleteAllClicked
    } = useContext(TodoContext);

    return (
        <>
            <Col>
                <ButtonRemove
                    list={todos}
                    removeList={deleteAllTodos}
                    setButtonBoolean={setIsButtonDeleteAllClicked}
                    buttonName='Delete All'
                />
            </Col>
            <Col>
                <ButtonRemove
                    list={completedTodos}
                    removeList={deleteCompletedTodos}
                    setButtonBoolean={setIsButtonDeleteCompletedClicked}
                    buttonName='Delete All Completed'
                />
            </Col>
            <Col>
                <ButtonRemove
                    list={uncompletedTodos}
                    removeList={deleteUncompletedTodos}
                    setButtonBoolean={setIsButtonDeleteUncompletedClicked}
                    buttonName='Delete All Uncompleted'
                />
            </Col>
        </>
    )
};
