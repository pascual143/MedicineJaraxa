import React from "react"
import { Link } from "react-router-dom"
import { Box, Button, Container, Grid, Typography } from "@mui/material"

const Home = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "70vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Grid container spacing={5} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              p: "3rem",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: -50,
                left: 0,
                right: 30,
                bottom: -70,
                backgroundColor: "#e5e5f7",
                opacity: 0.2,
                background: `linear-gradient(135deg, #444cf755 25%, transparent 25%) -10px 0/ 20px 20px, 
                             linear-gradient(225deg, #444cf7 25%, transparent 25%) -10px 0/ 20px 20px, 
                             linear-gradient(315deg, #444cf755 25%, transparent 25%) 0px 0/ 20px 20px, 
                             linear-gradient(45deg, #444cf7 25%, #e5e5f7 25%) 0px 0/ 20px 20px`,
                zIndex: -1,
                borderRadius: "8px",
              }}
            />
            <Typography
              variant="h4"
              sx={{
                maxWidth: "90%",
                textAlign: "center",
                padding: "16px",
                backgroundColor: "transparent",
                position: "relative",
                fontSize: "2.5rem",
                color: "var(--six-color)",
              }}
            >
              Bienvenido a App de búsqueda de medicamentos
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                width: "150px",
                height: "150px",
                borderRadius: "35%  60%  30% 50%",
                backgroundColor: "var(--six-color)",
                top: "-120px",
                left: "-50px",
                zIndex: -1,
                transition: "all 0.3s ease",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                width: "100px",
                height: "100px",
                borderRadius: "50% 40% 50% 40%",
                backgroundColor: "var(--second-color)",
                bottom: "-30px",
                right: "12px",
                zIndex: -1,
                transition: "all 0.3s ease",
              }}
            />
            <Link to="/medications">
              <Button
                className="button"
                sx={{
                  borderTop: "2px solid var(--second-color)",
                  borderLeft: "2px solid var(--second-color)",
                  position: "relative",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    m: "7px",
                    color: "var(--six-color)",
                    fontFamily: "Roboto",
                    fontWeight: "bold",
                    fontSize: "30px",
                  }}
                >
                  Buscar Medicinas
                </Typography>
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home
