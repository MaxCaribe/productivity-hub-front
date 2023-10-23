import { Box, Button } from "@mui/material";
import { useMutation, useQuery } from "@apollo/client";
import { GET_NOTE, DELETE_NOTE } from "../../queries/notes";
import { useNavigate, useParams } from "react-router-dom";

export const Note = () => {
  const { noteId } = useParams();
  const { loading, error, data } = useQuery(GET_NOTE, { variables: { id: noteId } });
  const navigate = useNavigate();
  const [deleteNote, { loadingDelete, errorDelete }] = useMutation(DELETE_NOTE)

  if (loading) return null;
  if (error) return null;
  if (loadingDelete) return null;
  if (errorDelete) return null;

  const renderContent = (content, n) => <Box key={`content-${n}`}>{content}</Box>

  const destroy = () => {
    deleteNote({ variables: { id: note.id }}).then(() => navigate('/notes'))
  }

  const { note } = data

  return <Box sx={{ display: "grid", gap: "10px", p: "10px", fontSize: "18px" }}>
    <Box><span>ID: </span><span>{ note.id }</span></Box>
    <Box><span>Name: </span><span>{ note.name }</span></Box>
    <span>Content: </span><Box>{ note.content.map(renderContent) }</Box>
    <Box sx={{ display: "flex", gap: "10px" }}>
      <Button variant="contained" onClick={() => navigate(`/notes/edit/${note.id}`)}>Edit</Button>
      <Button variant="contained" color="error" onClick={destroy}>Delete</Button>
    </Box>
  </Box>;
}