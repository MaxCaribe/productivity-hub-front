import { Box, Button } from "@mui/material";
import { useMutation, useQuery } from "@apollo/client";
import { GET_TASK, DELETE_TASK } from "../../queries/tasks";
import { useNavigate, useParams } from "react-router-dom";

export const Task = () => {
  const { taskId } = useParams();
  const { loading, error, data } = useQuery(GET_TASK, { variables: { id: taskId } });
  const navigate = useNavigate();
  const [deleteTask, { loadingDelete, errorDelete }] = useMutation(DELETE_TASK)

  if (loading) return null;
  if (error) return null;
  if (loadingDelete) return null;
  if (errorDelete) return null;

  const destroy = () => {
    deleteTask({ variables: { id: task.id }}).then(() => navigate('/tasks'))
  }

  const { task } = data

  return <Box sx={{ display: "grid", gap: "10px", p: "10px", fontSize: "18px" }}>
    <Box><span>ID: </span><span>{ task.id }</span></Box>
    <Box><span>Due: </span><span>{ task.due }</span></Box>
    <Box><span>Description: </span><span>{ task.description }</span></Box>
    <Box sx={{ display: "flex", gap: "10px" }}>
      <Button variant="contained" onClick={() => navigate(`/tasks/edit/${task.id}`)}>Edit</Button>
      <Button variant="contained" color="error" onClick={destroy}>Delete</Button>
    </Box>
  </Box>;
}