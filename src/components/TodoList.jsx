import { Box, Checkbox, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

// import { DataGridPro } from "@mui/x-data-grid-pro";

const TodoList = ({ todo, setTodo, editTodo, setEditTodo }) => {
  const handleComplete = (id) => {
    setTodo(
      todo.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleDelete = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    const findTodo = todo.find((item) => item.id === id);
    setEditTodo(findTodo);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "50vh",
        overflowX: "hidden",
        overflowY: "auto",
        paddingTop: "1rem",
        paddingRight: "1rem",
        mt: 2,
      }}
    >
      {todo.map((todo) => {
        return (
          <Grid
            container
            rowSpacing={1}
            sx={{
              width: "100%",
              borderRadius: "1rem",
              mb: 3,
              display: "flex",
              backgroundColor: "#e3f2fd",
            }}
            key={todo.id}
          >
            <Grid sx={{ height: "auto", padding: 2 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "monospace",
                  margin: "auto 0.5rem",
                  textAlign: "center",
                }}
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  color: todo.completed ? "grey" : "black",
                }}
              >
                {todo.title}
              </Typography>
            </Grid>
            <Grid sx={{ ml: "auto" }}>
              <IconButton
                edge="end"
                sx={{ mr: "2px" }}
                aria-label="complete"
                onClick={() => handleComplete(todo.id)}
              >
                <Checkbox checked={todo.completed} />
              </IconButton>
              <IconButton
                edge="end"
                sx={{ mr: "2px" }}
                aria-label="edit"
                color="success"
                onClick={() => handleEdit(todo.id)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                edge="end"
                sx={{ mr: "2px" }}
                color="error"
                onClick={() => handleDelete(todo.id)}
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
};

export default TodoList;
