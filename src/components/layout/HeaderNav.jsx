import React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Breadcrumbs from "@mui/material/Breadcrumbs"
import Link from "@mui/material/Link"
import MailIcon from "@mui/icons-material/Mail"
import SearchIcon from "@mui/icons-material/Search"
import InputBase from "@mui/material/InputBase"
import { Typography } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"

const HeaderNav = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "var(--fourth-color)" }} >
        <Toolbar>
          <Box
            sx={{
              position: "relative",
              borderRadius: 1,
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.25)",
              },
              marginLeft: 0,
              width: "100%",
              "@media (min-width:600px)": {
                marginLeft: 1,
                width: "auto",
              },
            }}
          >
            {/* Box de busqueda */}
            <Box
              sx={{
                padding: "0 16px",
                height: "100%",
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SearchIcon />
              {/* componente de busqueda */}
            </Box>
            <InputBase
              placeholder="Buscar…"
              sx={{
                color: "inherit",
                padding: "8px 8px 8px 0",
                paddingLeft: "calc(1em + 32px)",
                transition: "width 0.3s",
                width: "100%",
                "@media (min-width:960px)": {
                  width: "20ch",
                },
              }}
              inputProps={{ "aria-label": "buscar" }}
            />
          </Box>
          <Box sx={{ position: "absolute", right: "50px"}}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link
                underline="hover"
                color="inherit"
                href="/"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyItems: "center",
                }}
              >
                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                <Typography color="text.primary">Inicio</Typography>
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/info"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyItems: "center",
                }}
              >
                <InfoIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                <Typography color="text.primary">Info App</Typography>
              </Link>
            </Breadcrumbs>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default HeaderNav
