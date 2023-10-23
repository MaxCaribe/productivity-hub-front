import { Box, Button } from "@mui/material";
import { useQuery } from "@apollo/client";
import { GET_NOTES } from "queries/notes";
import { Link } from "components/common/link";

export const Notes = () => {
  const { loading, error, data } = useQuery(GET_NOTES);
  const renderNote = (note, n) => <Box key={`note-${n}`}><Link sx={{ fontSize: "18px" }} to={`${note.id}`}>{note.name}</Link></Box>

  if (loading) return null;
  if (error) return null;

  const { notes } = data

  return <Box sx={{ display: "flex", p: "10px", justifyContent: "space-between" }}>
    <Box>
      { notes.map(renderNote) }
    </Box>
    <Button variant="contained" sx={{ height: "40px" }}><Link white to={"new"}>Create New Note</Link></Button>
  </Box>;
}