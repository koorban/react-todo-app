import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';

export default function AlertComponent({ buttonBooleanValue, setButtonBooleanValue, alertHeading, alertMessage }) {
   const [show, setShow] = useState(false);
    
    const handleClose = () => {
        setShow(false);
        setButtonBooleanValue(false);
    };

    useEffect(() => {
        if (buttonBooleanValue === true && show === false) return setShow(true);
    }, [buttonBooleanValue, show]);

    return (
        <>
            { show && buttonBooleanValue &&
                <Alert variant='success' onClose={() => handleClose()} dismissible>
                <Alert.Heading>{alertHeading}</Alert.Heading>
                    <p>
                        {alertMessage}
                    </p>
                </Alert>
            }
        </>
    )
};
