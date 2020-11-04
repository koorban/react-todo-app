import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

export default function Header() {
    return (
        <Jumbotron style={{marginBottom: '3em'}}>
            <h1 style={{ textAlign: 'center', marginBottom: '1em' }}>
                Todo App
            </h1>
            <p style={{ textAlign: 'center' }}>
                Todo App created with React and Bootstrap
            </p>
        </Jumbotron>
    )
};
