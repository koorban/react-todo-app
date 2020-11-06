import React, { useContext } from 'react';
import { TodoContext } from './ContextTodo';
import Alert from './Alert';

export default function AlertContainer() {

    const {
        isTodoClicked,
        setIsTodoClicked,

        isButtonDeleteAllClicked,
        setIsButtonDeleteAllClicked,

        isButtonDeleteUncompletedClicked,
        setIsButtonDeleteUncompletedClicked,

        isButtonDeleteCompletedClicked,
        setIsButtonDeleteCompletedClicked,

    } = useContext(TodoContext);

    return (
        <>
            <Alert
                buttonBooleanValue={isTodoClicked}
                setButtonBooleanValue={setIsTodoClicked}
                alertHeading={'Todo Completed!'}
                alertMessage={'Good Job!'}
            />
            <Alert
                buttonBooleanValue={isButtonDeleteAllClicked}
                setButtonBooleanValue={setIsButtonDeleteAllClicked}
                alertHeading={'Both Lists Cleared!'}
                alertMessage={'Good One!'}
            />
            <Alert
                buttonBooleanValue={isButtonDeleteUncompletedClicked}
                setButtonBooleanValue={setIsButtonDeleteUncompletedClicked}
                alertHeading={'Incompleted List Cleared!'}
                alertMessage={'Way To Go!'}
            />
            <Alert
                buttonBooleanValue={isButtonDeleteCompletedClicked}
                setButtonBooleanValue={setIsButtonDeleteCompletedClicked}
                alertHeading={'Completed List Cleared!'}
                alertMessage={'Awesome!'}
            />
        </>
    )
};
