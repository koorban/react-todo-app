import React, { useState, useContext, useEffect } from 'react'
import { TodoContext } from './ContextTodo';
import Alert from 'react-bootstrap/Alert';

export default function ClearIncompletedListAlert() {
    const [show, setShow] = useState(false);

    const { isButtonDeleteUncompletedClicked, setIsButtonDeleteUncompletedClicked } = useContext(TodoContext);

    const handleClose = () => {
        setShow(false);
        setIsButtonDeleteUncompletedClicked(false);
    };

    useEffect(() => {
        if (isButtonDeleteUncompletedClicked === true && show === false) return setShow(true);
    }, [isButtonDeleteUncompletedClicked]);

    return (
        <>
            { show && isButtonDeleteUncompletedClicked &&
                <Alert variant='success' onClose={() => handleClose()} dismissible>
                    <Alert.Heading>Incompleted List Cleared!</Alert.Heading>
                    <p>
                        Way to go!
                    </p>
                </Alert>
            }
        </>
    )
};
