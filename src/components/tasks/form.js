import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useMutation } from "@apollo/client";
import { CREATE_TASK, UPDATE_TASK } from "../../queries/tasks";
import { useNavigate } from "react-router-dom";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { formatISO } from "date-fns";

export const TaskForm = ({ task }) => {
  const [name, setName] = useState(task?.name || "")
  const [due, setDue] = useState(task?.due || new Date())
  const [description, setDescription] = useState(task?.description || "")
  const [saveTask, { loading, error }] = useMutation(task ? UPDATE_TASK : CREATE_TASK)
  const navigate = useNavigate();

  if (loading) return null;
  if (error) return null;

  // userId should be authenticated user's ID
  const save = () => {
    saveTask({
      variables: {
        id: task?.id,
        name: name,
        due: formatISO(due, { representation: "date" }),
        description: description,
        userId: 1
      }
    }).then((response) => {
      const newId = task?.id ? response.data.taskUpdate.task.id : response.data.taskCreate.task.id;
      navigate(`/tasks/${newId}`)
    })
  }

  return(
    <Box sx={{ p: "10px", display: "grid", gap: "10px", justifyContent: "center" }}>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ width: "500px", maxWidth: "100%" }}
      />
      <DatePicker
        label="Due"
        value={Date.parse(due)}
        onChange={(newDue) => setDue(newDue)}
        sx={{ width: "500px", maxWidth: "100%" }}
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        sx={{ width: "500px", maxWidth: "100%" }}
      />
      <Button variant="contained" onClick={save} color="success">{ task?.id ? "Update Task" : "Create Task" }</Button>
    </Box>
  )
}