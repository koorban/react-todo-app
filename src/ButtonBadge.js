import React from 'react';
import Badge from 'react-bootstrap/Badge';

export default function ButtonBadge({ badgeContent, srContent, variant }) {
    return (
        <Badge variant={variant} style={{ marginLeft: '0.3em'}}>
            {badgeContent}
            <span className="sr-only">{srContent}</span>
        </Badge>
    )
};
