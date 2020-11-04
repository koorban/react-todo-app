import React, { useState, createContext } from 'react';
import todoList from './todo-list.json';

export const TodoContext = createContext();

export default function ContextTodo({ children }) {

    const [todos, setTodos] = useState(todoList);

    //Alerts
    const [isTodoClicked, setIsTodoClicked] = useState(false);
    const [isButtonDeleteAllClicked, setIsButtonDeleteAllClicked] = useState(false);
    const [isButtonDeleteUncompletedClicked, setIsButtonDeleteUncompletedClicked] = useState(false);
    const [isButtonDeleteCompletedClicked, setIsButtonDeleteCompletedClicked] = useState(false);

    const addTodo = (todo) => {
        let newTodoList = [...todos, { ...todo }];
        setTodos(newTodoList);
    };

    const updateIsDone = (id) => {
        let newTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, isDone: true }
            };
            return todo;
        });
        setTodos(newTodos);
    };

    const deleteAllTodos = () => {
        setTodos([]);
    };

    const deleteUncompletedTodos = () => {
        setTodos(completedTodos);
    };

    const deleteCompletedTodos = () => {
        setTodos(uncompletedTodos);
    };

    const completedTodos = todos.filter((todo) => todo.isDone === true);

    const uncompletedTodos = todos.filter((todo) => todo.isDone === false);

    return (
        <TodoContext.Provider value={{
            todos,

            isTodoClicked,
            setIsTodoClicked,

            isButtonDeleteAllClicked,
            setIsButtonDeleteAllClicked,

            isButtonDeleteUncompletedClicked,
            setIsButtonDeleteUncompletedClicked,

            isButtonDeleteCompletedClicked,
            setIsButtonDeleteCompletedClicked,

            addTodo,
            updateIsDone,
            
            deleteAllTodos,
            deleteUncompletedTodos,
            deleteCompletedTodos,

            completedTodos,
            uncompletedTodos
        }}>
            {children}
        </TodoContext.Provider>
    )
};
