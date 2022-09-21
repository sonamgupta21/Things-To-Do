import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";

import Form from "../components/Form";
import TodoList from "../components/TodoList";

const TodoPage = () => {
  // console.log(initialState);
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <Container
      maxWidth="sm"
      sx={{
        padding: "2px",
        margin: "2rem auto",
        borderRadius: "2rem",    
      }}
    >
      <Form
        input={input}
        todo={todo}
        setInput={setInput}
        setTodo={setTodo}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />

      <TodoList
        todo={todo}
        setTodo={setTodo}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
    </Container>
  );
};

export default TodoPage;
