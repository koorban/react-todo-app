import React, { useContext } from 'react';
import { TodoContext } from './ContextTodo';
import Alert from './Alert';

export default function AlertDeleteAllContainer() {
    const { isButtonDeleteAllClicked, setIsButtonDeleteAllClicked } = useContext(TodoContext);

    return (
        <Alert 
            buttonBooleanValue={isButtonDeleteAllClicked}
            setButtonBooleanValue={setIsButtonDeleteAllClicked}
            alertHeading={'Both Lists Cleared!'}
            alertMessage={'Good One!'}
        />
    );
};
