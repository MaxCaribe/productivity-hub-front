import { NoteForm } from "./form";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_NOTE } from "../../queries/notes";

export const EditNote = () => {
  const { noteId } = useParams();
  const { loading, error, data } = useQuery(GET_NOTE, { variables: { id: noteId } });

  if (loading) return null;
  if (error) return null;

  const { note } = data

  return <NoteForm note={note} />
}