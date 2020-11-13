import React, { useContext } from 'react';
import { TodoContext } from './ContextTodo';
import Alert from './Alert';

export default function AlertDeleteUncompletedContainer() {
    const { isButtonDeleteUncompletedClicked, setIsButtonDeleteUncompletedClicked } = useContext(TodoContext);

    return (
        <Alert 
            buttonBooleanValue={isButtonDeleteUncompletedClicked}
            setButtonBooleanValue={setIsButtonDeleteUncompletedClicked}
            alertHeading={'Uncompleted List Cleared!'}
            alertMessage={'Way To Go!'}
        />
    );
};
