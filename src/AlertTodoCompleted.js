import React, { useState, useContext, useEffect } from 'react';
import { TodoContext } from './ContextTodo';
import Alert from 'react-bootstrap/Alert';

export default function TodoAlert() {
    const [show, setShow] = useState(false);

    const { todoClicked, setTodoClicked } = useContext(TodoContext);
    
    const handleClose = () => {
        setShow(false);
        setTodoClicked(false);
    };

    useEffect(() => {
        if (todoClicked === true && show === false) return setShow(true);
    }, [todoClicked, show]);

    return (
        <>
            { show && todoClicked &&
                <Alert variant='success' onClose={() => handleClose()} dismissible>
                    <Alert.Heading>Todo Completed!</Alert.Heading>
                    <p>
                        Congratulations!
                    </p>
                </Alert>
            }
        </>
    )
};
