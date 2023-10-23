import { useState } from "react";
import { Box, Button, IconButton, TextField } from "@mui/material";
import { useMutation } from "@apollo/client";
import { CREATE_NOTE, UPDATE_NOTE } from "../../queries/notes";
import { useNavigate } from "react-router-dom";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const NoteForm = ({ note }) => {
  const [name, setName] = useState(note?.name)
  const [content, setContent] = useState(note?.content || [])
  const [saveNote, {loading, error }] = useMutation(note ? UPDATE_NOTE : CREATE_NOTE)
  const navigate = useNavigate();
  if (loading) return null;
  if (error) return null;

  // userId should be authenticated user's ID
  const save = () => {
    saveNote({ variables: { id: note?.id, name: name, content: content, userId: 1 } })
      .then((response) => {
        const newId = note?.id ? response.data.noteUpdate.note.id : response.data.noteCreate.note.id;
        navigate(`/notes/${newId}`)
      })
  }

  const replaceContent = (value, index) => {
    setContent(content.map((c, n) => {
      if(index === n) return value;
      return c;
    }))
  };

  const renderContent = (contentValue, n) => {
    return(
      <Box key={`content-${n}`} sx={{ display: "flex", alignItems: "center" }}>
        <TextField
          label="Content" value={contentValue}
          onChange={(e) => replaceContent(e.target.value, n)}
          sx={{ width: "500px", maxWidth: "100%" }}
          multiline
        />
        <IconButton sx={{ height: "56px", width: "56px" }} onClick={() => { setContent(content.filter((_, index) => index !== n )) }}>
          <RemoveCircleOutlineIcon color="error"/>
        </IconButton>
      </Box>
    )
  }

  return(
    <Box sx={{ p: "10px", display: "grid", gap: "10px", justifyContent: "center" }}>
      <TextField
        label="Name" value={name || ""}
        onChange={(e) => setName(e.target.value)}
        sx={{ width: "500px", maxWidth: "100%" }}
      />
      <Box sx={{ display: "grid", gap: "10px" }}>
        { content.map(renderContent) }
        <Box sx={{ width: "500px", maxWidth: "100%", display: "flex", justifyContent: "space-between" }}>
          <Button onClick={() => setContent([...content, ''])} startIcon={<AddCircleOutlineIcon/>} >
            Add content
          </Button>
          <Button variant="contained" onClick={save} color="success">{ note?.id ? "Update Note" : "Create Note" }</Button>
        </Box>
      </Box>
    </Box>
  )
}