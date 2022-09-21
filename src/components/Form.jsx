import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, todo, setInput, setTodo, editTodo, setEditTodo }) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todo.map((item) => {
      return item.id === id ? { title, id, completed } : item;
    });
    setTodo(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodo([...todo, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <Box sx={{ p: "auto", mt: 6 }}>
      <Typography
        variant="h3"
        sx={{
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".2rem",
          textAlign: "center",
          color: "#084464",
        }}
      >
        My Todo List
      </Typography>

      <form onSubmit={onFormSubmit}>
        <Box sx={{ display: "flex", mt: 4, mb: 1 }}>
          <TextField
            type="text"
            required
            value={input}
            onChange={(e) => setInput(e.target.value)}
            id="outlined-basic"
            label="Enter Task "
            variant="outlined"
            size="small"
            sx={{
              width: "100%",
              mr: 2,
              backgroundColor: "white",
            }}
          ></TextField>

          <Button type="submit" variant="contained" size="medium">
            {editTodo ? "OK" : "ADD"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Form;
