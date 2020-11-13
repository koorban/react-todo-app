import React, { useContext } from 'react'
import { TodoContext } from './ContextTodo';
import Alert from './Alert';

export default function AlertTodoClickedContainer() {
    const { isTodoClicked, setIsTodoClicked } = useContext(TodoContext);

    return (
        <Alert 
            buttonBooleanValue={isTodoClicked}
            setButtonBooleanValue={setIsTodoClicked}
            alertHeading={'Todo Completed!'}
            alertMessage={'Good Job!'}
        />
    );
};
