import { TaskForm } from "./form";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_TASK } from "../../queries/tasks";

export const EditTask = () => {
  const { taskId } = useParams();
  const { loading, error, data } = useQuery(GET_TASK, { variables: { id: taskId } });

  if (loading) return null;
  if (error) return null;

  const { task } = data

  return <TaskForm task={task} />
}