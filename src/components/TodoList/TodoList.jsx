import { Grid, GridItem, Todo } from 'components';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodos } from 'redux/selectors';

const TodoList = () => {
  const todos = useSelector(selectTodos);

  return (
    <Grid>
      {todos.length > 0 &&
        todos.map((todo, index) => (
          <GridItem key={todo.id}>
            <Todo id={todo.id} text={todo.text} counter={index + 1} />
          </GridItem>
        ))}
    </Grid>
  );
};

export default TodoList;
