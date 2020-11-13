import React, { useContext }  from 'react';
import { TodoContext } from './ContextTodo';
import Alert from './Alert';

export default function AlertDeleteCompleted() {
    const { isButtonDeleteCompletedClicked, setIsButtonDeleteCompletedClicked } = useContext(TodoContext);

    return (
        <Alert 
            buttonBooleanValue={isButtonDeleteCompletedClicked}
            setButtonBooleanValue={setIsButtonDeleteCompletedClicked}
            alertHeading={'Completed List Cleared!'}
            alertMessage={'Awesome!'}
        />
    );
};
