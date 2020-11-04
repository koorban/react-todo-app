import React, { useState, useEffect, useContext } from 'react';
import { TodoContext } from './ContextTodo';
import Alert from 'react-bootstrap/Alert';

export default function AlertDeleteCompletedList() {
    const [show, setShow] = useState(false);

    const { isButtonDeleteCompletedClicked , setIsButtonDeleteCompletedClicked } = useContext(TodoContext);

    const handleClose = () => {
        setShow(false);
        setIsButtonDeleteCompletedClicked(false);
    };

    useEffect(() => {
        if (isButtonDeleteCompletedClicked === true && show === false) return setShow(true);
    }, [isButtonDeleteCompletedClicked, show]);

    return (
        <>
            { show && isButtonDeleteCompletedClicked &&
                <Alert variant='success' onClose={() => handleClose()} dismissible>
                    <Alert.Heading> Completed List Cleared!</Alert.Heading>
                    <p>
                        Good Job!
                    </p>
                </Alert>
            }
        </>
    )
}
