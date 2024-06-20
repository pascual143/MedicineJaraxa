import React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Breadcrumbs from "@mui/material/Breadcrumbs"
import Link from "@mui/material/Link"
import { Typography } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"

const HeaderNav = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "var(--fourth-color)" }} >
        <Toolbar>
          <Box sx={{ position: "absolute", left: "150px"}}>
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
