import { Box, Button } from "@mui/material";
import { useQuery } from "@apollo/client";
import { GET_TASKS } from "queries/tasks";
import { Link } from "components/common/link";

export const Tasks = () => {
  const { loading, error, data } = useQuery(GET_TASKS);
  const renderTask = (task, n) => <Box key={`task-${n}`}><Link sx={{ fontSize: "18px" }} to={`${task.id}`}>{task.name}</Link></Box>

  if (loading) return null;
  if (error) return null;

  const { tasks } = data

  return <Box sx={{ display: "flex", p: "10px", justifyContent: "space-between" }}>
    <Box>
      { tasks.map(renderTask) }
    </Box>
    <Button variant="contained" sx={{ height: "40px" }}><Link white to={"new"}>Create New Task</Link></Button>
  </Box>;
}