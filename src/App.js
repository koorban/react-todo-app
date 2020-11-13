import React from 'react';
import Header from './Header';
import TodoForm from './TodoForm';
import ListCompletedContainer from './ListCompletedContainer';
import ListUncompletedContainer from './ListUncompletedContainer';
import ButtonRemoveContainer from './ButtonRemoveContainer';
import AlertContainer from './AlertContainer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
    return ( 
        <Container>
            <Header />
            <Row className = " justify-content-center mb-5">
                <Col xs = {{ offset: 3 } } md = {{ offset: 4 } } >
                    <TodoForm />
                </Col> 
            </Row> 
            <Row className = "mb-5">
                <ButtonRemoveContainer />
            </Row> 
            <Row>
                <Col>
                    <AlertContainer />
                </Col> 
            </Row> 
            <Row> 
                <Col >
                    <ListUncompletedContainer />
                </Col> 
                <Col>
                    <ListCompletedContainer />
                </Col>
            </Row> 
        </Container>
    );
};

export default App;