import React from 'react';
import ButtonBadge from './ButtonBadge';
import Button from 'react-bootstrap/Button';

export default function ButtonRemove({ list, removeList, setButtonBoolean, alertMessage, buttonName }) {

    const handleClick = () => {
        if (list.length > 0) {
            removeList();
            setButtonBoolean(true);
        } else {
            alert(alertMessage);
        }
    };

    return (
        <Button variant="primary" onClick={()=> handleClick()}>
            {buttonName}
            
            {(list.length > 0) &&
                <ButtonBadge
                    badgeContent={list.length}
                    srContent={'count for total'}
                    variant={'light'}
                />
            }
        </Button>
    )
}
