import { Box } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Box>
      <Box sx={{
        display: "flex",
        background: "green",
        height: "40px",
        gap: "20px",
        alignItems: "center",
        paddingLeft: "20px"
      }}>
        <NavLink style={{ color: "white", textDecoration: "none" }} to={'notes'}>Notes</NavLink>
        <NavLink style={{ color: "white", textDecoration: "none" }} to={'tasks'}>Tasks</NavLink>
      </Box>
      <Outlet/>
    </Box>

  )
}