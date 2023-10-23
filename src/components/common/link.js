import { Link as BaseLink } from "react-router-dom";
import { styled } from "@mui/material/styles";

export const Link = styled(
  BaseLink,
  { shouldForwardProp: (prop) => prop !== "white" }
)(({ theme, white = false }) => ({
  color:          white ? "#FFF" : "#4E4E4E",
  textDecoration: "none",

  "&:active":  { color: white ? "#FFF" : "#4E4E4E", },
  "&:visited": { color: white ? "#FFF" : "#4E4E4E", },
  "&:link":    { color: white ? "#FFF" : "#4E4E4E", },
  "&:hover":   { color: white ? "#FFF" : "#000", }
}));

