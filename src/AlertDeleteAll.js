import React, { useState, useContext, useEffect } from 'react';
import { TodoContext } from './ContextTodo';
import Alert from 'react-bootstrap/Alert';

export default function AlertDeleteAll() {
    const [show, setShow] = useState(false);
    
    const { isButtonDeleteAllClicked, setIsButtonDeleteAllClicked } = useContext(TodoContext);

    const handleClose = () => {
        setShow(false);
        setIsButtonDeleteAllClicked(false);
    };

    useEffect(() => {
        if (isButtonDeleteAllClicked === true && show === false) return setShow(true);
    }, [isButtonDeleteAllClicked]);

    return (
        <>
            { show && isButtonDeleteAllClicked &&
                <Alert variant='success' onClose={() => handleClose()} dismissible>
                    <Alert.Heading> Both Lists Cleared!</Alert.Heading>
                    <p>
                        Good Job!
                    </p>
                </Alert>
            }
        </>
    )
};
