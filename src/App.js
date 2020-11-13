import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from './Header';
import TodoForm from './TodoForm';
import ListCompletedContainer from './ListCompletedContainer';
import ListUncompletedContainer from './ListUncompletedContainer';

import DeleteAllContainer from './DeleteAllContainer';
import DeleteUncompletedContainer from './DeleteUncompletedContainer';
import DeleteCompletedContainer from './DeleteCompletedContainer';

import AlertTodoContainer from './AlertTodoContainer';
import AlertDeleteCompletedContainer from './AlertDeleteCompletedContainer';
import AlertDeleteAllContainer from './AlertDeleteAllContainer';
import AlertDeleteUncompletedContainer from './AlertDeleteUncompletedContainer';

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
                <Col>
                    <DeleteAllContainer />
                </Col>
                <Col>
                    <DeleteUncompletedContainer />
                </Col>
                <Col>
                    <DeleteCompletedContainer />
                </Col>
            </Row> 
            <Row>
                <Col>
                    <AlertTodoContainer />
                    <AlertDeleteCompletedContainer />
                    <AlertDeleteAllContainer />
                    <AlertDeleteUncompletedContainer />
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