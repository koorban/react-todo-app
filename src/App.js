import React from 'react';
import Header from './Header';
import TodoForm from './TodoForm';
import UncompletedList from './UncompletedList';
import CompletedList from './CompletedList';
import ButtonDeleteAll from './ButtonDeleteAll';
import ButtonDeleteUncompletedList from './ButtonDeleteUncompletedList';
import ButtonDeleteCompletedList from './ButtonDeleteCompletedList';
import AlertTodoCompleted from './AlertTodoCompleted';
import AlertDeleteAll from './AlertDeleteAll';
import AlertDeleteUncompletedList from './AlertDeleteUncompletedList';
import AlertDeleteCompletedList from './AlertDeleteCompletedList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <Container>
      <Header />
      <Row className=" justify-content-center mb-5">
        <Col xs={{ offset: 3 }}md={{ offset: 4 }}>
          <TodoForm />
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <ButtonDeleteAll />
        </Col>
        <Col>
          <ButtonDeleteUncompletedList />
        </Col>
        <Col>
          <ButtonDeleteCompletedList />
        </Col>
      </Row>
      <Row>
        <Col>
          <AlertTodoCompleted />
          <AlertDeleteAll />
          <AlertDeleteUncompletedList />
          <AlertDeleteCompletedList />
        </Col>
      </Row>
      <Row>
        <Col>
          <UncompletedList />
        </Col>
        <Col>
          <CompletedList />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
